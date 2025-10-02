const mongoose = require("mongoose");

const SeniorcitizensPageSchema = new mongoose.Schema(
  {
    bannerHeading: String,
    bannerPara: String,

    needToKnow1Heading:String,
    needToKnow1WhatisPara:String,



    needToKnow2Heading:String,
    needToKnow2WhatisPara1:String,
    needToKnow2WhatisPara2:String,




    needToKnow3Heading:String,
    needToKnow3WhatisPara1:String,
    needToKnow3WhatisPara2:String,


    needToKnow4Heading:String,
    needToKnow4WhatisPara:String,

    needToKnow5Heading:String,
    needToKnow5WhatisPara:String,


    needToKnow6Heading:String,
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
    needToKnowImg: String,

    whyAssanaSolution1Img: String,
    whyAssanaSolution2Img: String,
    whyAssanaSolution3Img: String,
    whyAssanaSolution4Img: String,



  },
  { timestamps: false } //  disable createdAt & updatedAt
);


module.exports =
  mongoose.models.SeniorcitizensPage ||
  mongoose.model("SeniorcitizensPage", SeniorcitizensPageSchema);
