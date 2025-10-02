const mongoose = require("mongoose");

const LaserSurgeryProblemsSchema = new mongoose.Schema(
  {
    LaserSurgery_Process1: String,
    LaserSurgery_Process1_Para: String,

    LaserSurgery_Process2: String,
    LaserSurgery_Process2_Para: String,

    LaserSurgery_Advantages1: String,
    LaserSurgery_Advantages2: String,
    LaserSurgery_Advantages3: String,
    LaserSurgery_Advantages4: String,

    Conditions_Treated_LaserSurgery_Para1: String,
    Conditions_Treated_LaserSurgery_Para2: String,


    // Image fields
    LaserSurgery_Image: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.LaserSurgeryProblems ||
  mongoose.model("LaserSurgeryProblems", LaserSurgeryProblemsSchema);
