let mongoose = require("mongoose");
let db = require("../models");
let Exercise = require("../models/Exercise");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let exerciseSeed = [
  {
    type: 'Strength',
    name: 'Bench Press'
  },
  {
    type: 'Strength',
    name: 'Bicep Curl'
  },
  {
    type: 'Strength',
    name: 'Lat Pull Down'
  },
  {
    type: 'Strength',
    name: 'Rows'
  },
  {
    type: 'Cardio',
    name: 'Running'
  },
  {
    type: 'Cardio',
    name: 'Stair Stepper'
  },
  {
    type: 'Cardio',
    name: 'Rowing'
  }
]

db.Exercise.deleteMany({})
.then(() => db.Exercise.collection.insertMany(exerciseSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});