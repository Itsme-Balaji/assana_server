const mongoose = require("mongoose");

const ColonHydrotherapyBannerSchema = new mongoose.Schema(
  {
    Heading: String,
    SubHeading: String,

    // Image fields
    Image: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.ColonHydrotherapyBanner ||
  mongoose.model("ColonHydrotherapyBanner", ColonHydrotherapyBannerSchema);
