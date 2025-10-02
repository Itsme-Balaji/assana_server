const mongoose = require("mongoose");

const ColonRectalCancerSchema = new mongoose.Schema(
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
    needToKnow2WhatisPara1:String,
    needToKnow2WhatisPara2:String,

    needToKnow2HelpHeading:String,
    needToKnow2HelpPara1:String,
    needToKnow2HelpPara2:String,
    needToKnow2HelpPara3:String,


    needToKnow3Heading:String,
    needToKnow3WhatisHeading:String,
    needToKnow3WhatisPara1:String,
    needToKnow3WhatisPara2:String,

    needToKnow4WhatisHeading:String,
    needToKnow4WhatisPara1:String,

    needToKnow5WhatisHeading:String,
    needToKnow5WhatisPara:String,

    needToKnow6WhatisHeading:String,
    needToKnow6WhatisPara:String,



    whyAssanaHeading: String,
    whyAssanaSolution1Heading: String,
    whyAssanaSolution1Para: String,

    whyAssanaSolution2Heading: String,
    whyAssanaSolution2Para: String,

    whyAssanaSolution3Heading: String,
    whyAssanaSolution3Para: String,

    whyAssanaSolution4Heading: String,
    whyAssanaSolution4Para: String,

    whyAssanaSolution5Heading: String,
    whyAssanaSolution5Para: String,

    whyAssanaSolution6Heading: String,
    whyAssanaSolution6Para: String,

    whyAssanaSolution7Heading: String,
    whyAssanaSolution7Para: String,

    whyAssanaSolution8Heading: String,
    whyAssanaSolution8Para: String,



    // Image fields
    colorectalBannerImg: String,
    needToKnowImg1: String,
    needToKnowImg2: String,
    needToKnowImg3: String,

    whyAssanaSolution1Img: String,
    whyAssanaSolution2Img: String,
    whyAssanaSolution3Img: String,
    whyAssanaSolution4Img: String,

    whyAssanaSolution5Img: String,
    whyAssanaSolution6Img: String,
    whyAssanaSolution7Img: String,
    whyAssanaSolution8Img: String,




  },
  { timestamps: false } //  disable createdAt & updatedAt
);


module.exports =
  mongoose.models.ColonRectalCancer ||
  mongoose.model("ColonRectalCancer", ColonRectalCancerSchema);
