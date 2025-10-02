const mongoose = require("mongoose");

const assanaTreatComponentSchema = new mongoose.Schema(
  {
    
    Heading: String,
    Treatment1: String,
    Treatment2: String,
    Treatment3: String,
    Treatment4: String,




    // Image fields
    TreatmentImg1: String,
    TreatmentImg2: String,
    TreatmentImg3: String,
    TreatmentImg4: String,
  },
  { timestamps: true }
);


module.exports =
  mongoose.models.assanaTreatComponent ||
  mongoose.model("assanaTreatComponent", assanaTreatComponentSchema);
