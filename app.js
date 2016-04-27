var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var user1 = require('./routes/user1');
var user2 = require('./routes/user2');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    console.log("test Middleware1!");
    next();
});
app.use(function(req, res, next){
    console.log("test Middleware2!");
    next();
});
app.use('/', user1);
user2(app);
app.listen(3000);




module.exports = app;
