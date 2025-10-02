const mongoose = require("mongoose");

const PelvicFloorPageSchema = new mongoose.Schema(
  {
    bannerHeading: String,
    bannerPara: String,
    needToKnow1Heading:String,
    needToKnow1WhatisHeading:String,
    needToKnow1WhatisPara:String,
    needToKnow1HelpHeading:String,
    needToKnow1HelpPara:String,
    needToKnow1SymptomsHeading:String,
    needToKnow1SymptomsPara1:String,
    needToKnow1SymptomsPara2:String,
    needToKnow1SymptomsPara3:String,


     needToKnow2Heading:String,
    needToKnow2WhatisHeading:String,
    needToKnow2WhatisPara:String,
    needToKnow2HelpHeading:String,
    needToKnow2HelpPara:String,
    needToKnow2SymptomsHeading:String,
    needToKnow2SymptomsPara1:String,
    needToKnow2SymptomsPara2:String,
    needToKnow2SymptomsPara3:String,


     needToKnow3Heading:String,
    needToKnow3WhatisHeading:String,
    needToKnow3WhatisPara:String,
    needToKnow3HelpHeading:String,
    needToKnow3HelpPara:String,
    needToKnow3SymptomsHeading:String,
    needToKnow3SymptomsPara1:String,
    needToKnow3SymptomsPara2:String,
    needToKnow3SymptomsPara3:String,


     needToKnow4Heading:String,
    needToKnow4WhatisHeading:String,
    needToKnow4WhatisPara:String,
    needToKnow4HelpHeading:String,
    needToKnow4HelpPara:String,
    needToKnow4SymptomsHeading:String,
    needToKnow4SymptomsPara1:String,
    needToKnow4SymptomsPara2:String,
    needToKnow4SymptomsPara3:String,

   


    whyAssanaHeading: String,
    whyAssanaSolution1Heading: String,
    whyAssanaSolution1Para: String,

    whyAssanaSolution2Heading: String,
    whyAssanaSolution2Para: String,

    whyAssanaSolution3Heading: String,
    whyAssanaSolution3Para: String,

    whyAssanaSolution4Heading: String,
    whyAssanaSolution4Para: String,



    // Image fields
    colorectalBannerImg: String,
    needToKnowImg1: String,
    needToKnowImg2: String,
    needToKnowImg3: String,
    needToKnowImg4: String,
    needToKnowImg5: String,
    needToKnowImg6: String,
    whyAssanaSolution1Img: String,
    whyAssanaSolution2Img: String,
    whyAssanaSolution3Img: String,
    whyAssanaSolution4Img: String,




  },
  { timestamps: false } //  disable createdAt & updatedAt
);


module.exports =
  mongoose.models.PelvicFloorPage ||
  mongoose.model("PelvicFloorPage", PelvicFloorPageSchema);
