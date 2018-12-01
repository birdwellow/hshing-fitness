var mongoose = require("mongoose");
var ExerciseSchema = require("./ExerciseSchema");

var TrainingSchema = mongoose.Schema({
  started: Date,
  exercises: [ExerciseSchema]
});

module.exports = TrainingSchema;
