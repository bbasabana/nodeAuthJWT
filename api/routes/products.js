const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message :'GET Products request'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message :'POST Products request'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message :'we found your Id',
            id:id
        });
    }else{
        res.status(200).json({
            message: 'dont found id'
        });
    }
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