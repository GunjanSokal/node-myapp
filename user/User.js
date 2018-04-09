// User.js
var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String
});
mongoose.model('UserInfo', UserSchema); //Binding the schema "UserSchema" to model named "UserInfo"
module.exports = mongoose.model('UserInfo');