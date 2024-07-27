var express = require('express');
const cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop');
var routes = require('./routes/routes');
const corsOptions = {
    origin: '*', 
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api', routes);

app.listen(3000, function(){
	console.log("App running");
});