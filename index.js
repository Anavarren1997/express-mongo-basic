const express       = require('express');
const cors          = require('cors');
const db            = require('./app/models/index.js');
const app           = express();

var corsOptions = {
    origin: "http://127.0.0.1:5173"
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Stablish connection to MongoDB
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Conectado a MongoDB");
    })
    .catch(err => {
        console.log("Cannot Connect to MongoDB! ", err);
        process.exit();
    })

//Here you want to import you route files.

//Every express app http method has a PATH and a handler function
//with the request and response as parameters.
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to our API rest built with Node.js & Express.'
    });
});

require('./app/routes/tutorial.routes.js')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT , () => {
    //Theres no env.PORT configured already
    console.log(`Hi, API listeing on Port ${PORT}`);
});

