const mongoose = require("mongoose");

const NewMomsProblemsSchema = new mongoose.Schema(
  {
    Post_Pregnancy_Challenges_Para: String,

    Healthcare_Gaps_Para: String,

    ASSANA_Wellness_Programme_Para1: String,
    ASSANA_Wellness_Programme_Para2: String,
    ASSANA_Wellness_Programme_Para3: String,
    ASSANA_Wellness_Programme_Para4: String,
    ASSANA_Wellness_Programme_Para5: String,






    // Image fields
    NewMoms_Programme_Image: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.NewMomsProblems ||
  mongoose.model("NewMomsProblems", NewMomsProblemsSchema);
