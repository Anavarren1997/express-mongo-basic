//how to create an express instance?
const express       = require('express');
const bodyParser    = require('body-parser');
const app           = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {    
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   res.setHeader('Access-Control-Allow-Credentials', false);
   next();
});

//Here you want to import you route files.

//Every express app http method has a PATH and a handler function
//with the request and response as parameters.
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to our API rest built with Node.js & Express.'
    });
});

app.get('/token', (req, res) => {
    
});

app.listen(process.env.PORT || 3000 , () => {
    //Theres no env.PORT configured already
    console.log('Hi, API listeing on Port 3000');
});

