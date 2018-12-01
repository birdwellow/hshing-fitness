var mongoose = require("mongoose");
var TrainingSchema = require("../db/schema/TrainingSchema");

var Training = mongoose.model("Training", TrainingSchema);

module.exports = Training;
