const mongoose = require("mongoose");

const patientFeedbacksComponentSchema = new mongoose.Schema(
  {
    componentHeading: String,
    componentSubHeading: String,
    patientFeeback: String,
    patientName: String,
    patientProblem: String,

    // Image fields
    patientImg: String,
  },
  { timestamps: true }
);


module.exports =
  mongoose.models.PatientFeedbackComponent ||
  mongoose.model("PatientFeedbackComponent", patientFeedbacksComponentSchema);
