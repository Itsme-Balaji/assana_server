// routes/patientFeedbackComponent.js
const express = require("express");
const router = express.Router();
const connectDB = require("../db");
const patientFeedbacksComponentModel = require("../models/patientFeedbacksComponentModel");
const { upload } = require("../middleware");
const supabase = require("../supabaseClient");

// Create or update multiple feedbacks
router.post("/dataAdd", upload.any(), async (req, res) => {
  try {
    const body = req.body;
    const files = req.files;

    let results = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = `patient_${Date.now()}_${file.originalname}`;

      // Upload to Supabase
      const { error: uploadError } = await supabase.storage
        .from(process.env.SUPABASE_BUCKET)
        .upload(fileName, file.buffer, {
          contentType: file.mimetype,
          upsert: true,
        });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data } = supabase.storage
        .from(process.env.SUPABASE_BUCKET)
        .getPublicUrl(fileName);

      const feedbackData = {
        componentHeading: body[`componentHeading_${i}`],
        patientFeeback: body[`patientFeeback_${i}`],
        patientName: body[`patientName_${i}`],
        patientProblem: body[`patientProblem_${i}`],
        patientImg: data.publicUrl, // store public Supabase URL
      };

      if (body[`_id_${i}`]) {
        const updated = await patientFeedbacksComponentModel.findByIdAndUpdate(
          body[`_id_${i}`],
          { $set: feedbackData },
          { new: true }
        );
        results.push(updated);
      } else {
        const saved = await new patientFeedbacksComponentModel(feedbackData).save();
        results.push(saved);
      }
    }

    res.status(200).json({ status: 1, message: "saved", data: results });
  } catch (err) {
    console.error("Error saving feedback:", err);
    res.status(500).json({ status: 0, message: "Internal server error", error: err.message });
  }
});

// Fetch all
router.get("/dataGet", async (req, res) => {
  try {
        await connectDB();
    
    const data = await patientFeedbacksComponentModel.find();
    res.status(200).json({ status: 1, message: "success", data });
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ status: 0, message: "Internal server error" });
  }
});

// Delete
router.delete("/dataDelete/:id", async (req, res) => {
  try {
    await patientFeedbacksComponentModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: 1, message: "Deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ status: 0, message: "Internal server error" });
  }
});

module.exports = router;
