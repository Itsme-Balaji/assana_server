const mongoose = require("mongoose");

const MenopausePageSchema = new mongoose.Schema(
  {
    bannerHeading: String,
    bannerPara: String,

  
    needToKnow1Heading:String,
    needToKnow1WhatisPara:String,

    needToKnow2Heading:String,
    needToKnow2WhatisPara1:String,
    needToKnow2WhatisPara2:String,

    needToKnow3Heading:String,
    needToKnow3WhatisPara:String,

    needToKnow4Heading:String,
    needToKnow4WhatisPara:String,

    needToKnow5Heading:String,
    needToKnow5WhatisPara1:String,
    needToKnow5WhatisPara2:String,

    needToKnow6Heading:String,
    needToKnow6WhatisPara:String,




    




    // Image fields
    colorectalBannerImg: String,
    needToKnowImg: String,



  },
  { timestamps: false } //  disable createdAt & updatedAt
);

module.exports =
  mongoose.models.MenopausePage ||
  mongoose.model("MenopausePage", MenopausePageSchema);
