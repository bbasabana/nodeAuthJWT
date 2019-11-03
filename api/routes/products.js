const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/', (req, res, next) => {
    Product.find()
    .select("name price _id")
    .exec()
    .then(docs => {
        const response = {
            count : docs.length,
            products : docs
        };
        console.log(docs);
        res.status(200).json(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
    });
    // res.status(200).json({
    //     message :'GET Products request'
    // });
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
        res.status(201).json({
            message :'POST Products  create request',
            CreatedProduct: product
        });
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
           error:err
        });
    });
});

router.patch('/:productId', (req, res, next) =>{
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    // Product.update({_id:id}, {$set:{name:req.body.NewName, price:req.body.NewPrice}});
    Product.update({_id:id}, {$set: updateOps})
    .exec()
    .then(result =>{
        console.log(result)
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(404).json({
            error : err
        })
    });
    // res.status(200).json({
    //     message : 'update product'
    // });
});

router.delete('/:productId', (req, res, next) =>{
    const id = req.params.productId;
    Product.remove({_id : id})
    .exec()
    .then(result =>{
        console.log(result)
        res.status(200).json(result);
    })
    .catch(err =>{
        res.status(500).json({
            error : err
        })
    });
    // res.status(200).json({
    //     message : 'delete product'
    // });
})


module.exports = router;