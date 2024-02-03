const mongoose= require('mongoose');
const dotenv= require('dotenv').config();

async function connectDB(){
    try {
        const conn= mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log("Error While Connecting",error)
    }
}

module.exports = connectDB;