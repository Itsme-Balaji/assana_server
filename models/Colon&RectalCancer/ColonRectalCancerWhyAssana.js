const mongoose = require("mongoose");

const ColonRectalCancerWhyAssanaSchema = new mongoose.Schema(
  {

    Reason_1_Heading: String,
    Reason_1_Details: String,

    Reason_2_Heading: String,
    Reason_2_Details: String,

    Reason_3_Heading: String,
    Reason_3_Details: String,


    Reason_4_Heading: String,
    Reason_4_Details: String,


    Reason_5_Heading: String,
    Reason_5_Details: String,

    Reason_6_Heading: String,
    Reason_6_Details: String,

    Reason_7_Heading: String,
    Reason_7_Details: String,


    Reason_8_Heading: String,
    Reason_8_Details: String,


    // Image fields
    Why_Assana_Image1: String,
    Why_Assana_Image2: String,
    Why_Assana_Image3: String,
    Why_Assana_Image4: String,


    Why_Assana_Image5: String,
    Why_Assana_Image6: String,
    Why_Assana_Image7: String,
    Why_Assana_Image8: String,



  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.ColonRectalCancerWhyAssana ||
  mongoose.model("ColonRectalCancerWhyAssana", ColonRectalCancerWhyAssanaSchema);
