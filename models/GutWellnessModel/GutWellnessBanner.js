const mongoose = require("mongoose");

const GutWellnessBannerSchema = new mongoose.Schema(
  {
    Heading: String,
    SubHeading: String,

    // Image fields
    Image: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.GutWellnessBanner ||
  mongoose.model("GutWellnessBanner", GutWellnessBannerSchema);
