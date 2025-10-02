const mongoose = require("mongoose");

const GutBrainAxisSchema = new mongoose.Schema(
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

    needToKnow4WhatisHeading:String,
    needToKnow4WhatisPara:String,


    needToKnow5WhatisHeading:String,
    needToKnow5WhatisPara:String,

    needToKnow6WhatisHeading:String,
    needToKnow6WhatisPara:String,

     needToKnow7WhatisHeading:String,
    needToKnow7WhatisPara:String,

     needToKnow8WhatisHeading:String,
    needToKnow8WhatisPara:String,



    whyAssanaHeading: String,
    whyAssanaSolution1Para1: String,
    whyAssanaSolution1Para2: String,





    // Image fields
    colorectalBannerImg: String,
    needToKnowImg1: String,
    needToKnowImg2: String,
    needToKnowImg3: String,
    needToKnowImg4: String,

  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.GutBrainAxis ||
  mongoose.model("GutBrainAxis", GutBrainAxisSchema);
