const mongoose = require("mongoose");

const ColonHydrotherapyProblemsSchema = new mongoose.Schema(
  {
    What_is_ColonHydrotherapy: String,
    What_is_Benefits_ColonHydrotherapy_Para1: String,
    What_is_Benefits_ColonHydrotherapy_Para2: String,
    What_is_Benefits_ColonHydrotherapy_Para3: String,
    What_is_Benefits_ColonHydrotherapy_Para4: String,
    What_is_Benefits_ColonHydrotherapy_Para5: String,
    What_is_Benefits_ColonHydrotherapy_Para6: String,

    What_is_Cutting_EdgeTechnology: String,
    Cutting_EdgeTechnology_System: String,

    What_is_Expect_DuringTreatment_para1: String,
    What_is_Expect_DuringTreatment_para2: String,

    What_is_Post_TreatmentCare: String,


    Who_Benefit_ColonHydrotherapy_Para1:String,
    Who_Benefit_ColonHydrotherapy_Para2:String,
    Who_Benefit_ColonHydrotherapy_Para3:String,
    Who_Benefit_ColonHydrotherapy_Para4:String,


    What_is_Comprehensive_Gut_CleanseProgram_para1: String,
    What_is_Comprehensive_Gut_CleanseProgram_para2: String,
    What_is_Comprehensive_Gut_CleanseProgram_para3: String,
    What_is_Comprehensive_Gut_CleanseProgram_para4: String,




    // Image fields
    ColonHydrotherapy_Image: String,
    Benefits_ColonHydrotherapy_Image: String,
    Cutting_EdgeTechnology_Image: String,
    Expect_DuringTreatment_Image: String,
    Who_Benefit_ColonHydrotherapy_Image: String,
    Comprehensive_Gut_CleanseProgram_Image:String





  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.ColonHydrotherapyProblems ||
  mongoose.model("ColonHydrotherapyProblems", ColonHydrotherapyProblemsSchema);
