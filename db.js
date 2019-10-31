
const mongoose = require('mongoose');

const connection = "mongodb://127.0.0.1:27017/nodejs";

const connectDB = () => {
   return mongoose.connect(connection, {useNewUrlParser: true} );
};

module.exports = connectDB;
