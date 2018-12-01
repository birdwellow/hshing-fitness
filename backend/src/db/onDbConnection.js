var Training = require("../model/Training");

module.exports = function() {
  Training.find(function(err, trainings) {
    if (err || (trainings && trainings.length > 0)) {
      console.log("Test data already present");
      return;
    }

    var trainings = [
      {
        started: new Date(),
        exercises: [
          {
            name: "Kurs",
            customFields: [
              {
                key: "Dauer",
                value: "45 min."
              },
              {
                key: "Kalorien verbrannt (ca.)",
                value: "220"
              }
            ]
          }
        ]
      }
    ];

    for (var i in trainings) {
      var training = new Training(trainings[i]);
      training.save(function(err, savedtraining) {
        if (err) {
          console.error(err);
        } else {
          console.log(`Saved training: ${savedtraining}`);
        }
      });
    }
  });
};
