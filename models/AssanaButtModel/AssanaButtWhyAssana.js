const mongoose = require("mongoose");

const AssanaButtWhyAssanaSchema = new mongoose.Schema(
  {

    Reason_1_Heading: String,
    Reason_1_Details: String,

    Reason_2_Heading: String,
    Reason_2_Details: String,

    Reason_3_Heading: String,
    Reason_3_Details: String,


    Reason_4_Heading: String,
    Reason_4_Details: String,


    // Image fields
    Why_Assana_Image1: String,
    Why_Assana_Image2: String,
    Why_Assana_Image3: String,
    Why_Assana_Image4: String,



  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.AssanaButtWhyAssana ||
  mongoose.model("AssanaButtWhyAssana", AssanaButtWhyAssanaSchema);
