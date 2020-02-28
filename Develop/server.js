const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const dbconfig = require("./db/config")

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongofitness", dbconfig.settings);

// Use express router to register routes as middleware
app.use("/api/activity", require("./routes/activity"));
app.use("/api/exercise", require("./routes/exercise"));
app.use("/api/workout", require("./routes/workout"));

// STUDENTS: REGISTER ROUTES TO HANDLE WORKOUT AND EXERCISE API CALLS
// Save the currently selected workout
//needs modification
app.post("/api/workout", ({ body }, res) => {
  db.Workout.create(body)
    .then(({ _id }) =>
      db.Workout.findOneAndUpdate(
        {},
        { $push: { workout: _id } },
        { new: true }
      )
    )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// Add an activity to the current workout being viewed.
// Save the currently selected workout
//needs LOTS of work
app.post("/api/activity?workoutId=:workoutId", ({ body }, res) => {
  db.Workout.create(body)
    .then(({ _id }) =>
      db.Workout.findOneAndUpdate(
        {},
        { $push: { workout: _id } },
        { new: true }
      )
    )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
