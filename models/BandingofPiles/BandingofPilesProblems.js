const mongoose = require("mongoose");

const BandingofPilesProblemsSchema = new mongoose.Schema(
  {
    What_is_Banding_of_Piles_para: String,
    What_Expect_During_Procedure_Para1: String,
    What_Expect_During_Procedure_Para2: String,
    What_Expect_During_Procedure_Para3: String,

    Who_Is_It_For_Para1: String,
    Who_Is_It_For_Para2: String,

    Benefits_Banding_Assana_Para1: String,
    Benefits_Banding_Assana_Para2: String,
    Benefits_Banding_Assana_Para3: String,
    Benefits_Banding_Assana_Para4: String,




    // Image fields
    Banding_Piles_Image: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.BandingofPilesProblems ||
  mongoose.model("BandingofPilesProblems", BandingofPilesProblemsSchema);
