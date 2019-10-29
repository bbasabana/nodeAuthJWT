
const mongoose = require('mongoose');

const connection = "mongodb://localhost:32776/node";

const connectDB = () => {
       return mongoose.connect(connection);
}

module.exports = connectDB;
