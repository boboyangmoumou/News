const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    "title": String, //标题
    "content": String,//内容
    "author": String,//作者
    // time: String,//时间
    "tags": String
})