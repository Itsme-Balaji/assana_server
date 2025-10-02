const mongoose = require("mongoose");

const VideoModel = new mongoose.Schema(
  {
    Heading: String,
    subHeading: String,
    videoLink: String,



  },
  { timestamps: true }
);


module.exports =
  mongoose.models.VideoComponent ||
  mongoose.model("VideoComponent", VideoModel);
