const router = require('express').Router();

// create routes urls api

router.post('/register', (req, res) => {
    res.send('Register');
})

module.exports = router;