const mongoose = require("mongoose");

const HomewhyassanaComponentSchema = new mongoose.Schema(
  {
    leftHeading: String,
    rightHeading: String,
    rightPara: String,



  },
  { timestamps: true }
);


module.exports =
  mongoose.models.HomewhyassanaComponent ||
  mongoose.model("HomewhyassanaComponent", HomewhyassanaComponentSchema);
