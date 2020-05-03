const dbConfig = require('../config/db.config.js'),
      mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.items = require('./item.model')(mongoose);

module.exports = db;
