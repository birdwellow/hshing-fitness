var express = require("express");
var router = express.Router();
var Training = require("../model/Training");

/* Create */
router.post("/", function(req, res) {
  var training = new Training(req.body);

  training.save(function(err, resultTraining) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(resultTraining);
    }
  });
});

/* Read */
router.get("/", function(req, res) {
  var queryArg = {};

  // if (req.query.date) {
  //     var date = new Date(req.query.date);
  //     queryArg.date = date;
  // }

  Training.find(queryArg, function(err, trainings) {
    res.status(200).send(trainings);
  });
});

router.get("/:id", function(req, res) {
  Training.findById(req.params.id, function(err, training) {
    var status = 404;
    if (training) {
      status = 200;
    }
    res.status(status).send(training);
  });
});

/* Update */
router.put("/", function(req, res) {
  var updateTraining = req.body;

  Training.update(
    { _id: updateTraining._id },
    { $set: updateTraining },
    function(err) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(204).send();
      }
    }
  );
});

/* Delete */
router.delete("/:id", function(req, res) {
  console.log("Removing " + req.params.id);
  Training.remove({ _id: req.params.id }, function(err) {
    if (err) {
      res.status(400).send(err);
    }
    res.status(204).send();
  });
});

module.exports = router;
