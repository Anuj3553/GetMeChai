"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDB"
import User from "@/models/User"
import Subscription from "@/models/Subscription"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()

    // Fetch the secret of the user who is getting the payment
    let user = await User.findOne({ username: to_username })
    const secret = user.razorpaysecret

    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // create a payment object which shows a pending payment in the database
    await Payment.create({ oid: x.id, amount: amount / 100, to_user: to_username, name: paymentform.name, message: paymentform.message })

    return x;
}


export const fetchuser = async (username) => {
    await connectDB();

    let u = await User.findOne({ username: username });
    let user = u.toObject({ flattenObjectIds: true });
    return user;
}

export const fetchProfile = async () => {
    await connectDB();

    const user = await User.find({}).limit(4);
    return user;
}

export const fetchCarouselProfile = async () => {
    await connectDB();

    const user = await User.find({});
    return user;
}

export const fetchPaymentData = async () => {
    await connectDB();

    const payments = await Payment.find({});
    return payments;
}

export const fetchpayments = async (username) => {
    await connectDB()

    // Find all payments sorted by decreasing order of amount and flatten object
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).lean()
    return p
}

export const updateProfile = async (data, oldusername) => {
    await connectDB()

    let ndata = Object.fromEntries(data)
    // If the username is being updated, check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }
        await User.updateOne({ email: ndata.email }, ndata)
        // Now update all the usernames in the Payments table
        await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })
    }
    else {
        await User.updateOne({ email: ndata.email }, ndata)
    }
}

export async function UserCount() {
    await connectDB();

    try {
        const userCount = await User.countDocuments();
        return userCount
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user count' });
    }
}


export async function PaymentCount() {
    await connectDB();

    try {
        const paymentCount = await Payment.countDocuments();
        return paymentCount
    } catch (error) {
        res.status(500).json({ error: 'Error fetching payment count' });
    }
}


export async function SubscribeUser(formData) {
    await connectDB();

    const email = formData.get('email'); // Extract the 'email' field from FormData

    if (!email) {
        return { error: 'Email is required' };
    }

    try {
        let newSubscription = new Subscription({ email });
        await newSubscription.save();
        return { message: 'Subscription successful', subscription: newSubscription };
    } catch (error) {
        return { error: 'Failed to subscribe user' };
    }
}