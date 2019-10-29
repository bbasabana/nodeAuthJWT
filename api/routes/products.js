const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message :'GET Products request'
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save()
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message :'POST Products  create request',
        CreatedProduct: product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc)
    })
    .catch(err =>{
        console.log(err);
    })
    // if(id === 'special'){
    //     res.status(200).json({
    //         message :'we found your Id',
    //         id:id
    //     });
    // }else{
    //     res.status(200).json({
    //         message: 'dont found id'
    //     });
    // }
});

router.patch('/:productId', (req, res, next) =>{
    res.status(200).json({
        message : 'update product'
    });
});

router.delete('/:productId', (req, res, next) =>{
    res.status(200).json({
        message : 'delete product'
    });
})


module.exports = router;