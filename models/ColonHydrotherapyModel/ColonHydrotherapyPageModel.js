const mongoose = require("mongoose");

const ColonHydrotherapySchema = new mongoose.Schema(
  {
    bannerHeading: String,
    bannerPara: String,

    needToKnow1Heading:String,
    needToKnow1WhatisHeading:String,
    needToKnow1WhatisPara:String,



    needToKnow2Heading:String,
    needToKnow2WhatisHeading:String,
    needToKnow2WhatisPara1:String,
    needToKnow2WhatisPara2:String,
    needToKnow2WhatisPara3:String,
    needToKnow2WhatisPara4:String,
    needToKnow2WhatisPara5:String,
    needToKnow2WhatisPara6:String,




    needToKnow3Heading:String,
    needToKnow3WhatisHeading:String,
    needToKnow3WhatisPara:String,
    needToKnow3HelpHeading:String,
    needToKnow3HelpPara:String,

     needToKnow4Heading:String,
    needToKnow4WhatisHeading:String,
    needToKnow4WhatisPara1:String,
    needToKnow4WhatisPara2:String,
    needToKnow4HelpHeading:String,
    needToKnow4HelpPara:String,


     needToKnow5Heading:String,
     needToKnow5WhatisHeading:String,
    needToKnow5WhatisPara1:String,
    needToKnow5WhatisPara2:String,
    needToKnow5WhatisPara3:String,
    needToKnow5WhatisPara4:String,


    needToKnow6Heading:String,
    needToKnow6WhatisHeading:String,
    needToKnow6WhatisPara1:String,
    needToKnow6WhatisPara2:String,
    needToKnow6WhatisPara3:String,
    needToKnow6WhatisPara4:String,




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
  mongoose.models.ColonHydrotherapy ||
  mongoose.model("ColonHydrotherapy", ColonHydrotherapySchema);
