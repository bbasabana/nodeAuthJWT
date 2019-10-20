const express = require('express');
const app = express();

//imports routes
const Authrouter = require('./routes/auth');

//Routes Middlewares 
app.use('api/user', Authrouter);

app.listen(3000, () => console.log('server up and running'));
