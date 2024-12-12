require("dotenv").config();
const URL = process.env.MONGOURI
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.connect(URL)
        console.log("MongoDB connected")
    } catch (error) {
        console.log("MongoDB not connected", error.message)
    }
}

module.exports = connectDB;

// https://www.myntra.com/
// mongodb://127.0.0.1:27017/Myntra
// RaghvendraSinghBhadouriya