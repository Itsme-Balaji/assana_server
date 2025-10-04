// routes/landingPage.js
const express = require("express");
const router = express.Router();
const connectDB = require("../../db");

const GutBrainAxisProblems = require("../../models/GutBrainAxisModel/GutBrainAxisProblems");
const { upload } = require("../../middleware");
const supabase = require("../../supabaseClient");

// Upload aboutBanner, founder, co_founder to Supabase
router.post(
  "/dataAdd",
  upload.fields([
    { name: "Gut_BrainAxis_Image", maxCount: 1 },
    { name: "Gut_Microbiome_Image", maxCount: 1 },
    { name: "ASSANA_Help_Gut_BrainAxis_Image", maxCount: 1 },
    { name: "Services_to_Support_Image", maxCount: 1 },

  ]),
  async (req, res) => {
    try {
      let existingDoc = await GutBrainAxisProblems.findOne();

      const GutBrainAxisProblemsData = { ...req.body };

      // Helper for Supabase upload
      const uploadToSupabase = async (file, oldUrl) => {
        if (!file) return oldUrl;

        const fileName = `about_${Date.now()}_${file.originalname}`;
        const { error: uploadError } = await supabase.storage
          .from(process.env.SUPABASE_BUCKET)
          .upload(fileName, file.buffer, {
            contentType: file.mimetype,
            upsert: true,
          });

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from(process.env.SUPABASE_BUCKET)
          .getPublicUrl(fileName);

        return data.publicUrl;
      };

      // Handle files
      GutBrainAxisProblemsData.Gut_BrainAxis_Image = await uploadToSupabase(
        req.files?.Gut_BrainAxis_Image?.[0],
        req.body.Gut_BrainAxis_ImageOld || existingDoc?.Gut_BrainAxis_Image
      );

      GutBrainAxisProblemsData.Gut_Microbiome_Image = await uploadToSupabase(
        req.files?.Gut_Microbiome_Image?.[0],
        req.body.Gut_Microbiome_ImageOld || existingDoc?.Gut_Microbiome_Image
      );

      GutBrainAxisProblemsData.ASSANA_Help_Gut_BrainAxis_Image = await uploadToSupabase(
        req.files?.ASSANA_Help_Gut_BrainAxis_Image?.[0],
        req.body.ASSANA_Help_Gut_BrainAxis_ImageOld || existingDoc?.ASSANA_Help_Gut_BrainAxis_Image
      );

      GutBrainAxisProblemsData.Services_to_Support_Image = await uploadToSupabase(
        req.files?.Services_to_Support_Image?.[0],
        req.body.Services_to_Support_ImageOld || existingDoc?.Services_to_Support_Image
      );


      // Save or update
      const updatedDoc = await GutBrainAxisProblems.findOneAndUpdate(
        {},
        { $set: GutBrainAxisProblemsData },
        { new: true, upsert: true }
      );

      res.send({ status: 1, message: "Saved Successfully", data: updatedDoc });
    } catch (error) {
      console.error("Error saving landing page:", error);
      res.status(500).send({
        status: 0,
        message: "Internal server error",
        error: error.message,
      });
    }
  }
);

// Fetch landing page
router.get("/dataGet", async (req, res) => {
  try {
        await connectDB();
    
    const data = await GutBrainAxisProblems.findOne().select(
      "-_id -__v -createdAt -updatedAt"
    );

    res.status(200).send({
      status: 1,
      message: "success",
      data,
    });
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).send({ status: 0, message: "Internal server error" });
  }
});

module.exports = router;
