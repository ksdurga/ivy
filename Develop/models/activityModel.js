const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter an activity type"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter an activity name"
  }
});

const Activity = mongoose.model("Activity", ActivitySchema);
module.exports = Activity;
