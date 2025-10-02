const mongoose = require("mongoose");

const BandingofPilesBannerSchema = new mongoose.Schema(
  {
    Heading: String,
    SubHeading: String,

  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.BandingofPilesBanner ||
  mongoose.model("BandingofPilesBanner", BandingofPilesBannerSchema);
