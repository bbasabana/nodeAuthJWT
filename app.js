const express = require('express');
const app = express();

// call router
const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

// routes handle request
app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);

module.exports = app;