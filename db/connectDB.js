const mongoose = require('mongoose')
let mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI)
        console.log('Connected to Mongo Successfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;