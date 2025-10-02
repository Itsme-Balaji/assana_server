const mongoose = require("mongoose");

const PilesorHaemorrhoidsBannerSchema = new mongoose.Schema(
  {
    Heading: String,
    SubHeading: String,

  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.PilesorHaemorrhoidsBanner ||
  mongoose.model("PilesorHaemorrhoidsBanner", PilesorHaemorrhoidsBannerSchema);
