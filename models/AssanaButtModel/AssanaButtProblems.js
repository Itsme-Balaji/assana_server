const mongoose = require("mongoose");

const AssanaButtProblemsSchema = new mongoose.Schema(
  {
    Consultation_Specialist_GutDoctor_Para: String,
    Laser_Surgery_Process_Para1: String,
    Laser_Surgery_Process_Para2: String,
    Laser_Surgery_Process_Para3: String,
    Laser_Surgery_Process_Para4: String,

    Allergy_Testing_Para: String,
    Gut_Microbiome_Testing_Para: String,

    Comprehensive_Gut_ReportCard_Para1: String,
    Comprehensive_Gut_ReportCard_Para2: String,
    Comprehensive_Gut_ReportCard_Para3: String,








    // Image fields
    Assana_ButtCheck_Image: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.AssanaButtProblems ||
  mongoose.model("AssanaButtProblems", AssanaButtProblemsSchema);
