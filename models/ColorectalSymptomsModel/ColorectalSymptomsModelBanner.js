const mongoose = require("mongoose");

const ColorectalSymptomsBannerSchema = new mongoose.Schema(
  {
    Heading: String,
    SubHeading: String,

    // Image fields
    Image: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.ColorectalSymptomsBanner ||
  mongoose.model("ColorectalSymptomsBanner", ColorectalSymptomsBannerSchema);
