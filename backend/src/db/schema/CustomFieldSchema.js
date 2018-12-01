var mongoose = require("mongoose");

var CustomFieldSchema = mongoose.Schema({
  key: String,
  value: String
});

module.exports = CustomFieldSchema;
