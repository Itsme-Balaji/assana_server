const mongoose = require("mongoose");

const ColonRectalCancerProblemsSchema = new mongoose.Schema(
  {
    What_is_ColorectalCancer: String,
    Assana_help_ColorectalCancer: String,
    ColorectalCancer_Symptoms1: String,
    ColorectalCancer_Symptoms2: String,
    ColorectalCancer_Symptoms3: String,

    ColorectalCancer_Diagnosed_Screening1: String,
    ColorectalCancer_Diagnosed_Screening2: String,

    ColorectalCancer_Advanced_Diagnostics1: String,
    ColorectalCancer_Advanced_Diagnostics2: String,
    ColorectalCancer_Advanced_Diagnostics3: String,

    What_is_Surgery_Para1:String,
    What_is_Surgery_Para2:String,

    What_is_RadiationTherapy_Para:String,

    What_is_Chemotherapy_Para:String,

    What_is_RoboticSurgery_Para:String,


    // Image fields
    ColorectalCancer_Image: String,
    ColorectalCancer_Diagnosed_Image: String,
    Treatment_Plan_Image: String,


  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.ColonRectalCancerProblems ||
  mongoose.model("ColonRectalCancerProblems", ColonRectalCancerProblemsSchema);
