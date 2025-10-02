const mongoose = require("mongoose");

const AssanaButtPageSchema = new mongoose.Schema(
  {
    bannerHeading: String,
    bannerPara: String,

    needToKnowHeading:String,
    needToKnow1Heading:String,
    needToKnow1WhatisPara:String,


    needToKnow2Heading:String,
    needToKnow2WhatisPara1:String,
    needToKnow2WhatisPara2:String,
    needToKnow2WhatisPara3:String,
    needToKnow2WhatisPara4:String,



    needToKnow3Heading:String,
    needToKnow3WhatisPara:String,


    needToKnow4Heading:String,
    needToKnow4WhatisPara:String,
    
    needToKnow5Heading:String,
    needToKnow5WhatisPara1:String,
    needToKnow5WhatisPara2:String,
    needToKnow5WhatisPara3:String,


   

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
    needToKnowImg: String,
    whyAssanaSolution1Img: String,
    whyAssanaSolution2Img: String,
    whyAssanaSolution3Img: String,
    whyAssanaSolution4Img: String,


  },
  { timestamps: false } //  disable createdAt & updatedAt
);


module.exports =
  mongoose.models.AssanaButtPage ||
  mongoose.model("AssanaButtPage", AssanaButtPageSchema);
