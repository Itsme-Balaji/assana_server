const mongoose = require("mongoose");

const AnalFistulaSchema = new mongoose.Schema(
  {
    bannerHeading: String,
    bannerPara: String,
    
    needToKnow1Heading:String,
    needToKnow1WhatisHeading:String,
    needToKnow1WhatisPara1:String,
    needToKnow1WhatisPara2:String,


    needToKnow1HelpHeading:String,
    needToKnow1HelpPara1:String,
    needToKnow1HelpPara2:String,


    needToKnow1SymptomsHeading:String,
    needToKnow1SymptomsPara1:String,
    needToKnow1SymptomsPara2:String,
    needToKnow1SymptomsPara3:String,


    needToKnow2Heading:String,
    needToKnow2WhatisHeading:String,
    needToKnow2WhatisPara1:String,
    needToKnow2WhatisPara2:String,
    needToKnow2WhatisPara3:String,
    needToKnow2WhatisPara4:String,


    needToKnow3Heading:String,
    needToKnow3WhatisHeading:String,

    needToKnow3WhatisPara1:String,
    needToKnow3WhatisPara2:String,
    needToKnow3WhatisPara3:String,

    needToKnow4Heading:String,
    needToKnow4WhatisHeading:String,
    needToKnow4WhatisPara1:String,
    needToKnow4WhatisPara2:String,
    needToKnow4WhatisPara3:String,

    needToKnow5Heading:String,
    needToKnow5WhatisHeading:String,
    needToKnow5WhatisPara1:String,
    needToKnow5WhatisPara2:String,
    needToKnow5WhatisPara3:String,
    needToKnow5WhatisPara4:String,

    needToKnow5Conclusion:String,
    needToKnow5ConclusionPara:String,






    // Image fields
    colorectalBannerImg: String,
    needToKnowImg1: String,
    needToKnowImg2: String,
    needToKnowImg3: String,
    needToKnowImg4: String,
    needToKnowImg5: String,







  },
  { timestamps: false } //  disable createdAt & updatedAt
);


module.exports =
  mongoose.models.AnalFistula ||
  mongoose.model("AnalFistula", AnalFistulaSchema);
