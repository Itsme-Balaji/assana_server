const mongoose = require("mongoose");

const PelvicFloorBannerSchema = new mongoose.Schema(
  {
    Heading: String,
    SubHeading: String,

    // Image fields
    Image: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.PelvicFloorBanner ||
  mongoose.model("PelvicFloorBanner", PelvicFloorBannerSchema);
