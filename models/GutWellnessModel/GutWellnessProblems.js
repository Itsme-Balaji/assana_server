const mongoose = require("mongoose");

const GutWellnessProblemsSchema = new mongoose.Schema(
  {
    What_is_LifestyleCounseling: String,
    What_is_NutritionalPlanning: String,
    What_is_LifestyleCoaching: String,

    What_is_ColonCleanse: String,
    What_is_GutMicrobiome_Optimization: String,
    What_is_FitnessCoaching_Para1: String,
    What_is_FitnessCoaching_Para2: String,
    What_is_FitnessCoaching_Para3: String,





    // Image fields
    LifestyleCounseling_Image: String,
    ColonCleanse_Image: String,

  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.GutWellnessProblems ||
  mongoose.model("GutWellnessProblems", GutWellnessProblemsSchema);
