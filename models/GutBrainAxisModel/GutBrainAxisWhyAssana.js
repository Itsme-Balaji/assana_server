const mongoose = require("mongoose");

const GutBrainAxisWhyAssanaSchema = new mongoose.Schema(
  {
    Why_Choose_ASSANA_Para1: String,
    Why_Choose_ASSANA_Para2: String,

  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.GutBrainAxisWhyAssana ||
  mongoose.model("GutBrainAxisWhyAssana", GutBrainAxisWhyAssanaSchema);
