"use server"

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";
import User from "@/models/User";
import Subscription from "@/models/Subscription";

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB();

    let user = await User.findOne({ username: to_username }).lean();
    const secret = user.razorpaysecret;

    const instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret });

    const options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    };

    const x = await instance.orders.create(options);

    await Payment.create({ oid: x.id, amount: amount / 100, to_user: to_username, name: paymentform.name, message: paymentform.message });

    return x;
};

export const fetchuser = async (username) => {
    await connectDB();

    const user = await User.findOne({ username }).lean();
    return user;
};

export const fetchProfile = async () => {
    await connectDB();

    const users = await User.find({}).limit(4).lean();
    return users;
};

export const fetchPaymentData = async () => {
    await connectDB();

    const payments = await Payment.find({}).lean();
    return payments;
};

export const fetchpayments = async (username) => {
    await connectDB();

    const payments = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).lean();
    return payments;
};

export const updateProfile = async (data, oldusername) => {
    await connectDB();

    const ndata = Object.fromEntries(data);

    if (oldusername !== ndata.username) {
        const userExists = await User.findOne({ username: ndata.username }).lean();
        if (userExists) {
            return { error: "Username already exists" };
        }
        await User.updateOne({ email: ndata.email }, ndata);
        await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username });
    } else {
        await User.updateOne({ email: ndata.email }, ndata);
    }
};

export async function UserCount() {
    await connectDB();

    try {
        const userCount = await User.countDocuments().lean();
        return userCount;
    } catch (error) {
        return { error: 'Error fetching user count' };
    }
}

export async function PaymentCount() {
    await connectDB();

    try {
        const paymentCount = await Payment.countDocuments().lean();
        return paymentCount;
    } catch (error) {
        return { error: 'Error fetching payment count' };
    }
}

export async function SubscribeUser(formData) {
    await connectDB();

    const email = formData.get('email');

    if (!email) {
        return { error: 'Email is required' };
    }

    try {
        const newSubscription = new Subscription({ email });
        await newSubscription.save();
        return { message: 'Subscription successful', subscription: newSubscription.toObject() };
    } catch (error) {
        return { error: 'Failed to subscribe user' };
    }
}
