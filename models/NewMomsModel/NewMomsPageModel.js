const mongoose = require("mongoose");

const NewMomsPageSchema = new mongoose.Schema(
  {
    bannerHeading: String,
    bannerPara: String,

    needToKnow1Heading:String,
    needToKnow1WhatisPara:String,


    needToKnow2Heading:String,
    needToKnow2WhatisPara:String,

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
  mongoose.models.NewMomsPage ||
  mongoose.model("NewMomsPage", NewMomsPageSchema);
