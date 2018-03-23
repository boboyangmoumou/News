const mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    username: String,//管理员
    passeword: String
})