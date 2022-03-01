const dbConfig = require("../nodejs-express-mongodb/db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./demo.model")(mongoose);
module.exports = db;