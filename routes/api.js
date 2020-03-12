const Workout = require("../models/Workout");
const db = require("../models");

module.exports = function(app) {
app.get("/api/workouts", function(req, res) {
    db.Workout.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

app.post("/api/workouts", function(req, res) {
    db.Workout.create({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

app.put("/api/workouts/:id", ({ body }, res) => {
    db.Workout.findOneAndUpdate(
        {}, { $push: { exercises: body }}, { new: true }
    )
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err)
    });
});

}
