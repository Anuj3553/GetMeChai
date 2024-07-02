import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDB";
import Payment from "@/models/Payment";
import User from "@/models/User";

const { validatePaymentVerification } = require('razorpay/dist/utils/razorpay-utils');

export const POST = async (req) => {
    await connectDB();

    let body = await req.formData();
    body = Object.fromEntries(body);

    // Check if razorpayOrderId is present on the server
    let p = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!p) {
        return NextResponse.json({ success: false, message: "Order Id not Found" });
    }

    // Fetch the secret of the user who is getting the payment
    let user = await User.findOne({ username: p.to_user })
    const secret = user.razorpaysecret

    // Verify the payment
    let xx = validatePaymentVerification(
        { "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id },
        body.razorpay_signature,
        secret
    );

    if (xx) {
        // Update the payment status
        const updatedPayment = await Payment.findOneAndUpdate(
            { oid: body.razorpay_order_id },
            { done: "true" },
            { new: true }
        );

        // Use a fallback URL if process.env.URL is undefined
        const redirectUrl = process.env.URL || 'http://localhost:3000';
        return NextResponse.redirect(`${redirectUrl}/${updatedPayment.to_user}?paymentdone=true`);
    } else {
        return NextResponse.json({ success: false, message: "Payment Verification Failed" });
    }
};
