const mongoose = require("mongoose");

const AfterAnalSurgeryPageSchema = new mongoose.Schema(
  {
    bannerHeading: String,
    bannerPara: String,

    needToKnow1Heading:String,
    needToKnow1WhatisPara1:String,
    needToKnow1WhatisPara2:String,



    needToKnow2Heading:String,
    needToKnow2WhatisPara:String,

    needToKnow3Heading:String,
    needToKnow3WhatisPara:String,

    needToKnow4Heading:String,
    needToKnow4WhatisPara1:String,
    needToKnow4WhatisPara2:String,

    needToKnow5Heading:String,
    needToKnow5WhatisPara:String,

    needToKnow6Heading:String,
    needToKnow6WhatisPara:String,

    





    

    

    // Image fields
    needToKnowImg: String,

  },
  { timestamps: false } //  disable createdAt & updatedAt
);


module.exports =
  mongoose.models.AfterAnalSurgeryPage ||
  mongoose.model("AfterAnalSurgeryPage", AfterAnalSurgeryPageSchema);
