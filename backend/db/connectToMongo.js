const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTdb);
        console.log('connected to DB!');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;