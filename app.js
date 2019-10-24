const express = require('express');
const app = express();

const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);

module.exports = app;