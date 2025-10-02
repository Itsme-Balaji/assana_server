const mongoose = require("mongoose");

const AnalFissureBannerSchema = new mongoose.Schema(
  {
    Heading: String,
    SubHeading: String,

  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.AnalFissureBanner ||
  mongoose.model("AnalFissureBanner", AnalFissureBannerSchema);
