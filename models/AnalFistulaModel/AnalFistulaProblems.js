const mongoose = require("mongoose");

const AnalFistulaProblemsSchema = new mongoose.Schema(
  {
    What_is_AnalFistula_Para1: String,
    What_is_AnalFistula_Para2: String,

    AnalFistula_Symptoms1: String,
    AnalFistula_Symptoms2: String,
    AnalFistula_Symptoms3: String,

    AnalFistula_Diagnosis_Para1: String,
    AnalFistula_Diagnosis_Para2: String,


    Surgical_Treatment_Heading: String,
    Surgical_Treatment_Para1: String,
    Surgical_Treatment_Para2: String,
    Surgical_Treatment_Para3: String,
    Surgical_Treatment_Para4: String,


    What_is_PostSurgeryCare_Para1: String,
    What_is_PostSurgeryCare_Para2: String,
    What_is_PostSurgeryCare_Para3: String,


     AnalFistulas_Preventing_Heading: String,
     AnalFistulas_Preventing_Para1: String,
     AnalFistulas_Preventing_Para2: String,
     AnalFistulas_Preventing_Para3: String,

    Seek_MedicalHelp_Heading: String,
    Seek_MedicalHelp_Para1: String,
    Seek_MedicalHelp_Para2: String,
    Seek_MedicalHelp_Para3: String,
    Seek_MedicalHelp_Para4: String,

    Seek_MedicalHelp_Conclusion_Para: String,



    // Image fields
    AnalFistula_Image: String,
    SurgicalTreatment_Image: String,
    Post_SurgeryCare_Image: String,
    Preventing_AnalFistulas_Image: String,
    SeekMedical_Help_Image: String,


  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.AnalFistulaProblems ||
  mongoose.model("AnalFistulaProblems", AnalFistulaProblemsSchema);
