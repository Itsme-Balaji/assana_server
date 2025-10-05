const mongoose = require("mongoose");

const MenopauseProblemsSchema = new mongoose.Schema(
  {
    What_is_Hormonal_Shifts: String,

    What_is_Slower_Digestive_para1: String,
    What_is_Slower_Digestive_para2: String,

    Increased_Risk_GI_Disorders_para: String,

    Bone_Gut_HealthLink_para: String,

    Dietary_Adjustments_para1: String,
    Dietary_Adjustments_para2: String,

    Medical_Support_para: String,


    // Image fields
    Menopause_Image: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.MenopauseProblems ||
  mongoose.model("MenopauseProblems", MenopauseProblemsSchema);
