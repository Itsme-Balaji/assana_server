const mongoose = require("mongoose");

const AnalFissureProblemsSchema = new mongoose.Schema(
  {
    AnalFissure_Symptoms1: String,
    AnalFissure_Symptoms2: String,
    AnalFissure_Symptoms3: String,
    AnalFissure_Symptoms4: String,
    AnalFissure_Symptoms5: String,

    AnalFissure_Causes1: String,
    AnalFissure_Causes2: String,
    AnalFissure_Causes3: String,
    AnalFissure_Causes4: String,
    AnalFissure_Causes5: String,

    AnalFissure_Treatment1: String,
    AnalFissure_Treatment2: String,
    AnalFissure_Treatment3: String,
    AnalFissure_Treatment4: String,
    AnalFissure_Treatment5: String,
    AnalFissure_Treatment6: String,



    // Image fields
    AnalFissure_Image: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.AnalFissureProblems ||
  mongoose.model("AnalFissureProblems", AnalFissureProblemsSchema);
