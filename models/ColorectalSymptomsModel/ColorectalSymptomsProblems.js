const mongoose = require("mongoose");

const ColorectalSyamptomsProblemsSchema = new mongoose.Schema(
  {
    What_is_RectalBleeding: String,
    Assana_help_RectalBleeding: String,
    RectalBleeding_Symptoms1: String,
    RectalBleeding_Symptoms2: String,
    RectalBleeding_Symptoms3: String,


    What_is_Constipation: String,
    Assana_help_Constipation: String,
    Constipation_Symptoms1: String,
    Constipation_Symptoms2: String,
    Constipation_Symptoms3: String,


    What_is_Diarrhoea: String,
    Assana_help_Diarrhoea: String,
    Diarrhoea_Symptoms1: String,
    Diarrhoea_Symptoms2: String,
    Diarrhoea_Symptoms3: String,


    What_is_IncompleteEvacuation: String,
    Assana_help_IncompleteEvacuation: String,
    IncompleteEvacuation_Symptoms1: String,
    IncompleteEvacuation_Symptoms2: String,
    IncompleteEvacuation_Symptoms3: String,


    What_is_MucusinStool: String,
    Assana_help_MucusinStool: String,
    MucusinStool_Symptoms1: String,
    MucusinStool_Symptoms2: String,
    MucusinStool_Symptoms3: String,


    What_is_Persistentitching: String,
    Assana_help_Persistentitching: String,
    Persistentitching_Symptoms1: String,
    Persistentitching_Symptoms2: String,
    Persistentitching_Symptoms3: String,



    

    // Image fields
    RectalBleeding_Image: String,
    Constipation_Image: String,
    Diarrhoea_Image: String,
    IncompleteEvacuation_Image: String,
    MucusinStool_Image: String,
    Persistentitching_Image: String,

  },
  { timestamps: false } //  disable createdAt & updatedAt
);



module.exports =
  mongoose.models.ColorectalSyamptomsProblems ||
  mongoose.model("ColorectalSyamptomsProblems", ColorectalSyamptomsProblemsSchema);
