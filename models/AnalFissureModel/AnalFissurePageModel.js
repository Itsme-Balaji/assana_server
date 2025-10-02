const mongoose = require("mongoose");

const AnalFissurePageSchema = new mongoose.Schema(
  {
    bannerHeading: String,
    bannerPara: String,
    
    needToKnow1Heading:String,
    needToKnow1WhatisPara1:String,
    needToKnow1WhatisPara2:String,
    needToKnow1WhatisPara3:String,
    needToKnow1WhatisPara4:String,
    needToKnow1WhatisPara5:String,



    needToKnow2Heading:String,
    needToKnow2WhatisPara1:String,
    needToKnow2WhatisPara2:String,
    needToKnow2WhatisPara3:String,
    needToKnow2WhatisPara4:String,
    needToKnow2WhatisPara5:String,



    needToKnow3Heading:String,
    needToKnow3WhatisPara1:String,
    needToKnow3WhatisPara2:String,
    needToKnow3WhatisPara3:String,
    needToKnow3WhatisPara4:String,
    needToKnow3WhatisPara5:String,
    needToKnow3WhatisPara6:String,




    // Image fields
    needToKnowImg: String,


  },
  { timestamps: false } //  disable createdAt & updatedAt
);


module.exports =
  mongoose.models.AnalFissurePage ||
  mongoose.model("AnalFissurePage", AnalFissurePageSchema);
