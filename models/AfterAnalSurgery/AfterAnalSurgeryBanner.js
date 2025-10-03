const mongoose = require("mongoose");

const AfterAnalSurgeryBannerSchema = new mongoose.Schema(
  {
    Heading: String,
    SubHeading: String,

  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.AfterAnalSurgeryBanner ||
  mongoose.model("AfterAnalSurgeryBanner", AfterAnalSurgeryBannerSchema);
