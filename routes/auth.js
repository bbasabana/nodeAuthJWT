const router = require('express').Router();
const {Request, Response } = require('express')
const User = require('../models/User');


// Validation
const Joi = require('@hapi/joi');

const Schema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
}

// create routes urls api

router.post('/register', async (req, res) => {
    // if(!req.is('application/json')){
    //     return next(new errors.InvalidContentError("Excepetes 'application/json'"))
    // }
    // const { error } = Joi.validate(req.body, Schema)
    // if(errror)return res.status(400).send(error.details[0].message);

    // res.send(validation);

    try{
        const { name, email, password } = req.body;
        const user = new User({
            name,
            email,
            password
        });
        console.log('before save');
        const saveUser = user.save();
        console.log(saveUser); //when success it print.
        console.log('after save');
        res.send(user)
    }catch(err){
        console.log('err' + err);
        res.status(500).send(err);
    }

     
    // try{
    //     const saveUser = await user.save();
    //     res.send(201);
    //     console.log('okkkkk');
    //     next();
    // }catch(err){
    //     return next(new errors.InternalError(err.message));
    //     // res.status(400).send(err);
    // }
});

module.exports = router;