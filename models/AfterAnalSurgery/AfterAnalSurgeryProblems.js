const mongoose = require("mongoose");

const AfterAnalSurgeryProblemsSchema = new mongoose.Schema(
  {
    

    General_Guidelines_Para1: String,
    General_Guidelines_Para2: String,

    SitzBaths_Para: String,

    Manage_Pain_Para: String,

    Specific_Tips_Para1: String,
    Specific_Tips_Para2: String,
 
    AnalFissure_Para: String,
    AnalFistula_Para: String,



    // Image fields
    AfterAnalSurgery_Image: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.AfterAnalSurgeryProblems ||
  mongoose.model("AfterAnalSurgeryProblems", AfterAnalSurgeryProblemsSchema);
