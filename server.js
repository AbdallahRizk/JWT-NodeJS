var express = require('express');
app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var config = require('./config/main');
var jwt = require('jsonwebtoken');

// TO Get POST requests for api use
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//Log request to console
app.use(morgan('dev'));

//Connect to database
mongoose.connect(config.database);


app.get('/', function(req, res){
    res.send('chill this is just to test dude')
});

app.listen(3500);
console.log('Server Running On http://localhost:3500');
