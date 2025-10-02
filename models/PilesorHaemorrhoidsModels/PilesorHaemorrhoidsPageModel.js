const mongoose = require("mongoose");

const PilesorHaemorrhoidsSchema = new mongoose.Schema(
  {
    bannerHeading: String,
    bannerPara: String,
    needToKnow1Heading:String,
    needToKnow1WhatisHeading:String,    
    needToKnow1WhatisPara1:String,
    needToKnow1WhatisPara2:String,
    needToKnow1WhatisPara3:String,
    needToKnow1HelpHeading:String,
    needToKnow1HelpPara1:String,
    needToKnow1HelpPara2:String,
    needToKnow1HelpPara3:String,



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
    needToKnow3HelpHeading:String,
    needToKnow3HelpPara1:String,
    needToKnow3HelpPara2:String,


    // Image fields
    needToKnowImg1: String,
    needToKnowImg2: String,
    needToKnowImg3: String,






  },
  { timestamps: false } //  disable createdAt & updatedAt
);


module.exports =
  mongoose.models.PilesorHaemorrhoids ||
  mongoose.model("PilesorHaemorrhoids", PilesorHaemorrhoidsSchema);
