// routes/landingPage.js
const express = require("express");
const router = express.Router();
const connectDB = require("../../db");

const AssanaButtWhyAssana = require("../../models/AssanaButtModel/AssanaButtWhyAssana");
const { upload } = require("../../middleware");
const supabase = require("../../supabaseClient");

// Upload aboutBanner, founder, co_founder to Supabase
router.post(
  "/dataAdd",
  upload.fields([
    { name: "Why_Assana_Image1", maxCount: 1 },
    { name: "Why_Assana_Image2", maxCount: 1 },
    { name: "Why_Assana_Image3", maxCount: 1 },
    { name: "Why_Assana_Image4", maxCount: 1 },

  ]),
  async (req, res) => {
    try {
      let existingDoc = await AssanaButtWhyAssana.findOne();

      const AssanaButtWhyAssanaData = { ...req.body };

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
      AssanaButtWhyAssanaData.Why_Assana_Image1 = await uploadToSupabase(
        req.files?.Why_Assana_Image1?.[0],
        req.body.Why_Assana_Image1Old || existingDoc?.Why_Assana_Image1
      );

      AssanaButtWhyAssanaData.Why_Assana_Image2 = await uploadToSupabase(
        req.files?.Why_Assana_Image2?.[0],
        req.body.Why_Assana_Image2Old || existingDoc?.Why_Assana_Image2
      );

      AssanaButtWhyAssanaData.Why_Assana_Image3 = await uploadToSupabase(
        req.files?.Why_Assana_Image3?.[0],
        req.body.Why_Assana_Image3Old || existingDoc?.Why_Assana_Image3
      );

      AssanaButtWhyAssanaData.Why_Assana_Image4 = await uploadToSupabase(
        req.files?.Why_Assana_Image4?.[0],
        req.body.Why_Assana_Image4Old || existingDoc?.Why_Assana_Image4
      );



      // Save or update
      const updatedDoc = await AssanaButtWhyAssana.findOneAndUpdate(
        {},
        { $set: AssanaButtWhyAssanaData },
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
    
    const data = await AssanaButtWhyAssana.findOne().select(
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
