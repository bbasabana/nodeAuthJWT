const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const connectDB = require('./db');

dotenv.config();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// connect to DB
// mongoose.connect(
//     "mongodb+srv://BBasabana:"+
//     process.env.MONGO_ATLAS_PWD+
//     "cluster0-kjqor.mongodb.net/bbasabana?retryWrites=true&w=majority",
//     {useNewUrlParser: true}, () =>{
//    console.log('DB connected');
// });

connectDB().then( () => {
    console.log('MongoDb connected');
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if(req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, PATCH, DELETE')
      return res.status(200).json({});
  }
  next();

});
// call router
const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

// routes handle request
app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status= 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500 );
    res.json({
        error : {
            message : error.message
        }
    });
})

module.exports = app;