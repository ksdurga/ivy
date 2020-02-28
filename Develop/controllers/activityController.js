const Activity = require("../models/activityModel.js");

const ActivityController = {
  // This is called (when needed) from the route page when a 
  // listing of all Activitys is needed
  getAll(req, res){
    Activity.find({}).then(data => {
      res.json(data)
    });
  }
}


module.exports = ActivityController;