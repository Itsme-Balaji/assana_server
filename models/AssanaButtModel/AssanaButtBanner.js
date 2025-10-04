const mongoose = require("mongoose");

const AssanaButtBannerSchema = new mongoose.Schema(
  {
    Heading: String,
    SubHeading: String,

  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.AssanaButtBanner ||
  mongoose.model("AssanaButtBanner", AssanaButtBannerSchema);
