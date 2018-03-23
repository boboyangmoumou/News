const mongoose = require('mongoose');
const userSchema = require('../schemas/user.js');

module.exports = mongoose.model('User',userSchema);