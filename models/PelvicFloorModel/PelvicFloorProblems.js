const mongoose = require("mongoose");

const PelvicFloorProblemsSchema = new mongoose.Schema(
  {
    What_is_RectalProlapse: String,
    Assana_help_RectalProlapse: String,
    RectalProlapse_Symptoms1: String,
    RectalProlapse_Symptoms2: String,
    RectalProlapse_Symptoms3: String,


    What_is_Rectocoele: String,
    Assana_help_Rectocoele: String,
    Rectocoele_Symptoms1: String,
    Rectocoele_Symptoms2: String,
    Rectocoele_Symptoms3: String,


    What_is_ODS: String,
    Assana_help_ODS: String,
    ODS_Symptoms1: String,
    ODS_Symptoms2: String,
    ODS_Symptoms3: String,


    What_is_RectalIntussusception: String,
    Assana_help_RectalIntussusception: String,
    RectalIntussusception_Symptoms1: String,
    RectalIntussusception_Symptoms2: String,
    RectalIntussusception_Symptoms3: String,



    // Image fields
    RectalProlapse_Image: String,
    Rectocoele_Image: String,
    ODS_Image: String,
    RectalIntussusception_Image: String,


  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.PelvicFloorProblems ||
  mongoose.model("PelvicFloorProblems", PelvicFloorProblemsSchema);
