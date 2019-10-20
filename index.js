const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

//imports routes
const AuthRouter = require('./routes/auth');

dotenv.config();

// connect DB mongoDB
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser : true},() =>  console.log('DB connected'));
 
//middleware
app.use(bodyparser.json());

//Routes Middlewares 
app.use('/api/user', AuthRouter);

app.listen(3000, () => console.log('server up and running'));
