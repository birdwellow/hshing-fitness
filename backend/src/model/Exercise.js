var mongoose = require("mongoose");
var ExerciseSchema = require("../db/schema/ExerciseSchema");

var Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
