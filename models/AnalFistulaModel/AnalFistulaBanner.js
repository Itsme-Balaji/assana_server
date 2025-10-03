const mongoose = require("mongoose");

const AnalFistulaBannerSchema = new mongoose.Schema(
  {
    Heading: String,
    SubHeading: String,

    // Image fields
    Image: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.AnalFistulaBanner ||
  mongoose.model("AnalFistulaBanner", AnalFistulaBannerSchema);
