// // db.js
var mongoose = require('mongoose');
var url = 'mongodb://GunjanSokal:gunjan123@ds237409.mlab.com:37409/demo';
mongoose.connect(url,function(err){
    if(err){
        console.log('MongoDB connection error: ' + err);
    }
    else{
        console.log('conneted');
    }
});

