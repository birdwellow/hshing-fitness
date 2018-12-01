var mongoose = require("mongoose");
var CustomFieldSchema = require("./CustomFieldSchema");

var ExerciseSchema = mongoose.Schema({
  name: String,
  customFields: [CustomFieldSchema]
});

module.exports = ExerciseSchema;
