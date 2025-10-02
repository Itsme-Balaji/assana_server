const mongoose = require("mongoose");

const LaserSurgeryBannerSchema = new mongoose.Schema(
  {
    Heading: String,
    SubHeading: String,

  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.LaserSurgeryBanner ||
  mongoose.model("LaserSurgeryBanner", LaserSurgeryBannerSchema);
