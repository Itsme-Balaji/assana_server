const mongoose = require("mongoose");

const GutBrainAxisBannerSchema = new mongoose.Schema(
  {
    Heading: String,
    SubHeading: String,

    // Image fields
    Image: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.GutBrainAxisBanner ||
  mongoose.model("GutBrainAxisBanner", GutBrainAxisBannerSchema);
