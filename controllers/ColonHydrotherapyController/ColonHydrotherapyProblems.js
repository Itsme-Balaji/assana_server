// routes/landingPage.js
const express = require("express");
const router = express.Router();
const connectDB = require("../../db");

const ColonHydrotherapyProblems = require("../../models/ColonHydrotherapyModel/ColonHydrotherapyProblems");
const { upload } = require("../../middleware");
const supabase = require("../../supabaseClient");

// Upload aboutBanner, founder, co_founder to Supabase
router.post(
  "/dataAdd",
  upload.fields([
    { name: "ColonHydrotherapy_Image", maxCount: 1 },
    { name: "Benefits_ColonHydrotherapy_Image", maxCount: 1 },
    { name: "Cutting_EdgeTechnology_Image", maxCount: 1 },
    { name: "Expect_DuringTreatment_Image", maxCount: 1 },
    { name: "Who_Benefit_ColonHydrotherapy_Image", maxCount: 1 },
    { name: "Comprehensive_Gut_CleanseProgram_Image", maxCount: 1 },

  ]),
  async (req, res) => {
    try {
      let existingDoc = await ColonHydrotherapyProblems.findOne();

      const ColonHydrotherapyProblemsData = { ...req.body };

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
      ColonHydrotherapyProblemsData.ColonHydrotherapy_Image = await uploadToSupabase(
        req.files?.ColonHydrotherapy_Image?.[0],
        req.body.ColonHydrotherapy_ImageOld || existingDoc?.ColonHydrotherapy_Image
      );

      ColonHydrotherapyProblemsData.Benefits_ColonHydrotherapy_Image = await uploadToSupabase(
        req.files?.Benefits_ColonHydrotherapy_Image?.[0],
        req.body.Benefits_ColonHydrotherapy_ImageOld || existingDoc?.Benefits_ColonHydrotherapy_Image
      );

      ColonHydrotherapyProblemsData.Cutting_EdgeTechnology_Image = await uploadToSupabase(
        req.files?.Cutting_EdgeTechnology_Image?.[0],
        req.body.Cutting_EdgeTechnology_ImageOld || existingDoc?.Cutting_EdgeTechnology_Image
      );

      ColonHydrotherapyProblemsData.Expect_DuringTreatment_Image = await uploadToSupabase(
        req.files?.Expect_DuringTreatment_Image?.[0],
        req.body.Expect_DuringTreatment_ImageOld || existingDoc?.Expect_DuringTreatment_Image
      );

      ColonHydrotherapyProblemsData.Who_Benefit_ColonHydrotherapy_Image = await uploadToSupabase(
        req.files?.Who_Benefit_ColonHydrotherapy_Image?.[0],
        req.body.Who_Benefit_ColonHydrotherapy_ImageOld || existingDoc?.Who_Benefit_ColonHydrotherapy_Image
      );

      ColonHydrotherapyProblemsData.Comprehensive_Gut_CleanseProgram_Image = await uploadToSupabase(
        req.files?.Comprehensive_Gut_CleanseProgram_Image?.[0],
        req.body.Comprehensive_Gut_CleanseProgram_ImageOld || existingDoc?.Comprehensive_Gut_CleanseProgram_Image
      );

      // Save or update
      const updatedDoc = await ColonHydrotherapyProblems.findOneAndUpdate(
        {},
        { $set: ColonHydrotherapyProblemsData },
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
    
    const data = await ColonHydrotherapyProblems.findOne().select(
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
