const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    "userId": String,
    "userName": String,//管理员
    "passePwd": String
})