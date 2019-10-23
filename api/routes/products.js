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


module.exports = router;