// routes/landingPage.js
const express = require("express");
const router = express.Router();
const connectDB = require("../../db");

const AssanaButtBannerModel = require("../../models/AssanaButtModel/AssanaButtBanner");
const { upload } = require("../../middleware");
const supabase = require("../../supabaseClient");

router.post(
  "/dataAdd",
  upload.fields([
   
  ]),
  async (req, res) => {
    try {
      let existingDoc = await AssanaButtBannerModel.findOne();

      const AssanaButtBannerData = { ...req.body };

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



      // Save or update
      const updatedDoc = await AssanaButtBannerModel.findOneAndUpdate(
        {},
        { $set: AssanaButtBannerData },
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
    
    const data = await AssanaButtBannerModel.findOne().select(
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
