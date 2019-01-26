var express = require("express");
var router = express.Router();
var Training = require("../model/Training");

/* Read */
router.get("/", function(req, res) {
  Training.find(function(err, trainings) {
    var exercises = [];
    trainings.forEach(training => {
      exercises = exercises.concat(training.exercises);
    });
    if (req.query.name) {
      var regex = new RegExp(".*" + req.query.name + ".*", "i");
      exercises = exercises.filter(exercises => {
        return regex.test(exercises.name);
      });
    }
    res.status(200).send(exercises);
  });
});

module.exports = router;
