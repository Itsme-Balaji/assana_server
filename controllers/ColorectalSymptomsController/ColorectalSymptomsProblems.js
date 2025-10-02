// routes/landingPage.js
const express = require("express");
const router = express.Router();
const connectDB = require("../../db");

const ColorectalSyamptomsProblems = require("../../models/ColorectalSymptomsModel/ColorectalSymptomsProblems");
const { upload } = require("../../middleware");
const supabase = require("../../supabaseClient");

// Upload aboutBanner, founder, co_founder to Supabase
router.post(
  "/dataAdd",
  upload.fields([
    { name: "RectalBleeding_Image", maxCount: 1 },
    { name: "Constipation_Image", maxCount: 1 },
    { name: "Diarrhoea_Image", maxCount: 1 },
    { name: "IncompleteEvacuation_Image", maxCount: 1 },
    { name: "MucusinStool_Image", maxCount: 1 },
    { name: "Persistentitching_Image", maxCount: 1 },

  ]),
  async (req, res) => {
    try {
      let existingDoc = await ColorectalSyamptomsProblems.findOne();

      const ColorectalSyamptomsProblemsData = { ...req.body };

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
      ColorectalSyamptomsProblemsData.RectalBleeding_Image = await uploadToSupabase(
        req.files?.RectalBleeding_Image?.[0],
        req.body.RectalBleeding_ImageOld || existingDoc?.RectalBleeding_Image
      );

      ColorectalSyamptomsProblemsData.Constipation_Image = await uploadToSupabase(
        req.files?.Constipation_Image?.[0],
        req.body.Constipation_ImageOld || existingDoc?.Constipation_Image
      );

      ColorectalSyamptomsProblemsData.Diarrhoea_Image = await uploadToSupabase(
        req.files?.Diarrhoea_Image?.[0],
        req.body.Diarrhoea_ImageOld || existingDoc?.Diarrhoea_Image
      );

      ColorectalSyamptomsProblemsData.IncompleteEvacuation_Image = await uploadToSupabase(
        req.files?.IncompleteEvacuation_Image?.[0],
        req.body.IncompleteEvacuation_ImageOld || existingDoc?.IncompleteEvacuation_Image
      );

      ColorectalSyamptomsProblemsData.MucusinStool_Image = await uploadToSupabase(
        req.files?.MucusinStool_Image?.[0],
        req.body.MucusinStool_ImageOld || existingDoc?.MucusinStool_Image
      );

      ColorectalSyamptomsProblemsData.Persistentitching_Image = await uploadToSupabase(
        req.files?.Persistentitching_Image?.[0],
        req.body.Persistentitching_ImageOld || existingDoc?.Persistentitching_Image
      );

      // Save or update
      const updatedDoc = await ColorectalSyamptomsProblems.findOneAndUpdate(
        {},
        { $set: ColorectalSyamptomsProblemsData },
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
    
    const data = await ColorectalSyamptomsProblems.findOne().select(
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
