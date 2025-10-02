const mongoose = require("mongoose");

const LaserSurgeryPageSchema = new mongoose.Schema(
  {
    bannerHeading: String,
    bannerPara: String,

    needToKnow1Heading:String,
    needToKnow1SubHeading1:String,
    needToKnow1WhatisPara1:String,

    needToKnow1SubHeading2:String,
    needToKnow1WhatisPara2:String,

    needToKnow2Heading:String,
    needToKnow2WhatisPara1:String,
    needToKnow2WhatisPara2:String,

    needToKnow3Heading:String,
    needToKnow3WhatisPara1:String,
    needToKnow3WhatisPara2:String,

    needToKnow4Heading:String,
    needToKnow4WhatisPara1:String,
    needToKnow4WhatisPara2:String,



    


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
  mongoose.models.LaserSurgeryPage ||
  mongoose.model("LaserSurgeryPage", LaserSurgeryPageSchema);
