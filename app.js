var db = require('./db');
var UserController = require('./user/UserController');
var express = require('express');
var app = express();
app.use('/users', UserController);
module.exports = app; 