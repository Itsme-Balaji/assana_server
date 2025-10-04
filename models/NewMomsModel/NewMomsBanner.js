const mongoose = require("mongoose");

const NewMomsBannerSchema = new mongoose.Schema(
  {
    Heading: String,
    SubHeading: String,

  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.NewMomsBanner ||
  mongoose.model("NewMomsBanner", NewMomsBannerSchema);
