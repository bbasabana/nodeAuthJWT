const express = require('express');
const app = express();

//imports routes
const AuthRouter = require('./routes/auth');

//Routes Middlewares 
app.use('/api/user', AuthRouter);

app.listen(3000, () => console.log('server up and running'));
