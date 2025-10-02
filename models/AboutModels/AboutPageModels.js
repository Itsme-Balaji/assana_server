const mongoose = require("mongoose");

const AboutPageSchema = new mongoose.Schema(
  {
    bannerHeading: String,
    bannerSubHeading: String,
    whyAssanaHeading: String,
    whyAssanaSubHeading: String,
    whyAssanaPara: String,
    ourMissionHeading: String,
    ourVisionHeading: String,
    ourMissionPara: String,
    ourVisionPara: String,
    approachHeading:String,
    approachPara:String, 

    meetTeamHeading: String,
    founderHeading: String,
    co_founderHeading: String,
    founderName:String,
    founderQualifications:String,
    founderWorkDetails:String,
    co_founderName: String,
    co_founderWorkDetails:String,

    // Image fields
    aboutBanner: String,
    founder: String,
    co_founder: String,
  },
  { timestamps: false } //  disable createdAt & updatedAt
);

module.exports =
  mongoose.models.AboutPage ||
  mongoose.model("AboutPage", AboutPageSchema);