const db = require("../models");
const mongojs = require("mongojs");

module.exports = function(app) {
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  });

app.put("/api/workouts/:id", (req, res) => {
    db.Workout.update(
        {
            _id: mongojs.ObjectId(req.params.id)
        }, 
        { 
            $push: { exercises: req.body }
        }
    )
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err)
    });
});



}
