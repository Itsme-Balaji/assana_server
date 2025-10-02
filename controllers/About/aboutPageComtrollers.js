// routes/landingPage.js
const express = require("express");
const router = express.Router();
const connectDB = require("../../db");
const aboutPageModel = require("../../models/AboutModels/AboutPageModels");
const { upload } = require("../../middleware");
const supabase = require("../../supabaseClient");

// Upload aboutBanner, founder, co_founder to Supabase
router.post(
  "/dataAdd",
  upload.fields([
    { name: "aboutBanner", maxCount: 1 },
    { name: "founder", maxCount: 1 },
    { name: "co_founder", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      let existingDoc = await aboutPageModel.findOne();

      const aboutPageData = { ...req.body };

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
      aboutPageData.aboutBanner = await uploadToSupabase(
        req.files?.aboutBanner?.[0],
        req.body.aboutBannerOld || existingDoc?.aboutBanner
      );

      aboutPageData.founder = await uploadToSupabase(
        req.files?.founder?.[0],
        req.body.founderOld || existingDoc?.founder
      );

      aboutPageData.co_founder = await uploadToSupabase(
        req.files?.co_founder?.[0],
        req.body.co_founderOld || existingDoc?.co_founder
      );

      // Save or update
      const updatedDoc = await aboutPageModel.findOneAndUpdate(
        {},
        { $set: aboutPageData },
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
    
    const data = await aboutPageModel.findOne().select(
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
