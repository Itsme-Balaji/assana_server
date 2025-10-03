// routes/landingPage.js
const express = require("express");
const router = express.Router();
const connectDB = require("../../db");

const AnalFistulaBannerModel = require("../../models/AnalFistulaModel/AnalFistulaBanner");
const { upload } = require("../../middleware");
const supabase = require("../../supabaseClient");

// Upload aboutBanner, founder, co_founder to Supabase
router.post(
  "/dataAdd",
  upload.fields([
    { name: "Image", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      let existingDoc = await AnalFistulaBannerModel.findOne();

      const AnalFistulaBannerData = { ...req.body };

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
      AnalFistulaBannerData.Image = await uploadToSupabase(
        req.files?.Image?.[0],
        req.body.ImageOld || existingDoc?.Image
      );


      // Save or update
      const updatedDoc = await AnalFistulaBannerModel.findOneAndUpdate(
        {},
        { $set: AnalFistulaBannerData },
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
    
    const data = await AnalFistulaBannerModel.findOne().select(
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
