// routes/landingPage.js
const express = require("express");
const router = express.Router();
const connectDB = require("../../db");

const AnalFistulaProblems = require("../../models/AnalFistulaModel/AnalFistulaProblems");
const { upload } = require("../../middleware");
const supabase = require("../../supabaseClient");

// Upload aboutBanner, founder, co_founder to Supabase
router.post(
  "/dataAdd",
  upload.fields([
    { name: "AnalFistula_Image", maxCount: 1 },
    { name: "SurgicalTreatment_Image", maxCount: 1 },
    { name: "Post_SurgeryCare_Image", maxCount: 1 },
    { name: "Preventing_AnalFistulas_Image", maxCount: 1 },
    { name: "SeekMedical_Help_Image", maxCount: 1 },


  ]),
  async (req, res) => {
    try {
      let existingDoc = await AnalFistulaProblems.findOne();

      const AnalFistulaProblemsData = { ...req.body };

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
      AnalFistulaProblemsData.AnalFistula_Image = await uploadToSupabase(
        req.files?.AnalFistula_Image?.[0],
        req.body.AnalFistula_ImageOld || existingDoc?.AnalFistula_Image
      );

      AnalFistulaProblemsData.SurgicalTreatment_Image = await uploadToSupabase(
        req.files?.SurgicalTreatment_Image?.[0],
        req.body.SurgicalTreatment_ImageOld || existingDoc?.SurgicalTreatment_Image
      );

      AnalFistulaProblemsData.Post_SurgeryCare_Image = await uploadToSupabase(
        req.files?.Post_SurgeryCare_Image?.[0],
        req.body.Post_SurgeryCare_ImageOld || existingDoc?.Post_SurgeryCare_Image
      );

      AnalFistulaProblemsData.Preventing_AnalFistulas_Image = await uploadToSupabase(
        req.files?.Preventing_AnalFistulas_Image?.[0],
        req.body.Preventing_AnalFistulas_ImageOld || existingDoc?.Preventing_AnalFistulas_Image
      );

      AnalFistulaProblemsData.SeekMedical_Help_Image = await uploadToSupabase(
        req.files?.SeekMedical_Help_Image?.[0],
        req.body.SeekMedical_Help_ImageOld || existingDoc?.SeekMedical_Help_Image
      );


      // Save or update
      const updatedDoc = await AnalFistulaProblems.findOneAndUpdate(
        {},
        { $set: AnalFistulaProblemsData },
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
    
    const data = await AnalFistulaProblems.findOne().select(
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
