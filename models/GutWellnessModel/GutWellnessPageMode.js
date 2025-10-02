const mongoose = require("mongoose");

const GutWellnessPageSchema = new mongoose.Schema(
  {
    bannerHeading: String,
    bannerPara: String,

    needToKnow1Heading:String,
    needToKnow1WhatisHeading:String,
    needToKnow1WhatisPara:String,

    needToKnow2Heading:String,
    needToKnow2WhatisHeading:String,
    needToKnow2WhatisPara:String,

    needToKnow3Heading:String,
    needToKnow3WhatisHeading:String,
    needToKnow3WhatisPara:String,

    needToKnow4Heading:String,
    needToKnow4WhatisHeading:String,
    needToKnow4WhatisPara:String,

    needToKnow5Heading:String,
    needToKnow5WhatisPara:String,

    needToKnow6Heading:String,
    needToKnow6WhatisPara1:String,
    needToKnow6WhatisPara2:String,
    needToKnow6WhatisPara3:String,







    // Image fields
    colorectalBannerImg: String,
    needToKnowImg1: String,
    needToKnowImg2: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.GutWellnessPage ||
  mongoose.model("GutWellnessPage", GutWellnessPageSchema);
