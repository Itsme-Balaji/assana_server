const mongoose = require("mongoose");

const PilesorHaemorrhoidsProblemsSchema = new mongoose.Schema(
  {
    What_is_Conservative_Heading: String,
    What_is_Conservative_para1: String,
    What_is_Conservative_para2: String,
    What_is_Conservative_para3: String,

    Conservative_Topical_Treatments_Heading:String,
    Conservative_Topical_Treatments_para1:String,
    Conservative_Topical_Treatments_para2:String,
    Conservative_Topical_Treatments_para3:String,


    What_is_MedicalTreatment_Heading: String,
    What_is_MedicalTreatment_para1: String,
    What_is_MedicalTreatment_para2: String,
    What_is_MedicalTreatment_para3: String,
    What_is_MedicalTreatment_para4: String,


    What_is_SurgicalTreatment_Heading: String,
    What_is_SurgicalTreatment_para1: String,
    What_is_SurgicalTreatment_para2: String,
    What_is_SurgicalTreatment_para3: String,

    SurgicalTreatment_PreventiveMeasures_heading: String,
    SurgicalTreatment_PreventiveMeasures_para1: String,
    SurgicalTreatment_PreventiveMeasures_para2: String,




    // Image fields
    Conservative_Image: String,
    MedicalTreatment_Image: String,
    SurgicalTreatment_Image: String,


  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.PilesorHaemorrhoidsProblems ||
  mongoose.model("PilesorHaemorrhoidsProblems", PilesorHaemorrhoidsProblemsSchema);
