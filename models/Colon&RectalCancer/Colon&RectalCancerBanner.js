const mongoose = require("mongoose");

const ColonRectalCancerBannerSchema = new mongoose.Schema(
  {
    Heading: String,
    SubHeading: String,

    // Image fields
    Image: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.ColonRectalCancerBanner ||
  mongoose.model("ColonRectalCancerBanner", ColonRectalCancerBannerSchema);
