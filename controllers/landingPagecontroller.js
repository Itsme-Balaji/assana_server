// routes/landingPage.js
const express = require("express");
const router = express.Router();
const connectDB = require("../db");
const landingPageModel = require("../models/landingPagemodel");
const { upload } = require("../middleware");
const supabase = require("../supabaseClient");

// Upload logo, background, doctorImage to Supabase
router.post(
  "/dataAdd",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "background", maxCount: 1 },
    { name: "doctorImage", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      let existingDoc = await landingPageModel.findOne();

      const landingPageData = { ...req.body };

      // Helper for Supabase upload
      const uploadToSupabase = async (file, oldUrl) => {
        if (!file) return oldUrl;

        const fileName = `landing_${Date.now()}_${file.originalname}`;
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
      landingPageData.logo = await uploadToSupabase(
        req.files?.logo?.[0],
        req.body.logoOld || existingDoc?.logo
      );

      landingPageData.background = await uploadToSupabase(
        req.files?.background?.[0],
        req.body.backgroundOld || existingDoc?.background
      );

      landingPageData.doctorImage = await uploadToSupabase(
        req.files?.doctorImage?.[0],
        req.body.doctorImageOld || existingDoc?.doctorImage
      );

      // Save or update
      const updatedDoc = await landingPageModel.findOneAndUpdate(
        {},
        { $set: landingPageData },
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
    
    const data = await landingPageModel.findOne().select(
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
