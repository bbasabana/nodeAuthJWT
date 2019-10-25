const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
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