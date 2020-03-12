const db = require("../models");
const express = require("express");

const app = express();

db.Workout.create({ name: "Workout Tracker App" })
    .then(dbWorkout => {
        console.log(dbWorkout);
    })
    .catch(({message}) => {
        console.log(message);
    });

app.post("/exercise", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

