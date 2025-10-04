const mongoose = require("mongoose");

const GutBrainAxisProblemsSchema = new mongoose.Schema(
  {
    What_is_Gut_BrainAxis: String,
    What_is_Gut_Microbiome: String,

    ASSANA_Help_Gut_BrainAxis : String,

    Services_to_Support_Details : String,
    ASSANA_Life_Gut_WellnessProgram : String,
    Gut_Nutrition_DietCounseling : String,
    StressManagement_LifestyleCounseling : String,
    Probiotic_PrebioticGuidance : String,




    // Image fields
    Gut_BrainAxis_Image: String,
    Gut_Microbiome_Image: String,
    ASSANA_Help_Gut_BrainAxis_Image: String,
    Services_to_Support_Image: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.GutBrainAxisProblems ||
  mongoose.model("GutBrainAxisProblems", GutBrainAxisProblemsSchema);
