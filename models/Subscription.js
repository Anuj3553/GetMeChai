import mongoose from "mongoose";
const { Schema, model } = mongoose;

const SubscriptionSchema = new Schema({
    email: { type: String, required: true, unique: true },
});

export default mongoose.models.Subscription || model("Subscription", SubscriptionSchema);
