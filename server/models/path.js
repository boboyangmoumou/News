const mongoose = require('mongoose');
const pathSchema = require('../schemas/path');

module.exports = mongoose.model('Path',pathSchema);