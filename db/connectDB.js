const mongoose = require('mongoose')
let mongoURI = "mongodb://localhost:27017/GetMeChai";

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI)
        console.log('Connected to Mongo Successfully')
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB;