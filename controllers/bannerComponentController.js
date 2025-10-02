// routes/bannerComponent.js
const express = require("express");
const router = express.Router();
const connectDB = require("../db");
const bannerComponentModel = require("../models/bannerComponentModel");
const { upload } = require("../middleware");
const supabase = require("../supabaseClient");

// Helper to upload a single file to Supabase and return its public URL
const uploadToSupabase = async (file, prefix) => {
  const fileName = `${prefix}_${Date.now()}_${file.originalname}`;
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

// Add / Update banner component (only one document)
router.post(
  "/dataAdd",
  upload.fields([
    { name: "bannerImg", maxCount: 1 },
    { name: "bannerleftImg1", maxCount: 1 },
    { name: "bannerleftImg2", maxCount: 1 },
    { name: "bannerleftImg3", maxCount: 1 },
    { name: "bannerleftImg4", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const body = req.body;
      const files = req.files;

      // Start with existing values (text fields)
      let bannerComponentData = { ...body };

      // Handle each image upload if exists, otherwise keep old
      const imageFields = [
        "bannerImg",
        "bannerleftImg1",
        "bannerleftImg2",
        "bannerleftImg3",
        "bannerleftImg4",
      ];

      for (const field of imageFields) {
        if (files[field] && files[field][0]) {
          // New file → upload to Supabase
          bannerComponentData[field] = await uploadToSupabase(
            files[field][0],
            field
          );
        } else if (body[`${field}Old`]) {
          // Keep old Supabase URL if passed
          bannerComponentData[field] = body[`${field}Old`];
        }
      }

      // Save or update (only one doc allowed)
      const updatedDoc = await bannerComponentModel.findOneAndUpdate(
        {},
        { $set: bannerComponentData },
        { new: true, upsert: true }
      );

      res.send({ status: 1, message: "Saved successfully", data: updatedDoc });
    } catch (error) {
      console.error("Error saving banner:", error);
      res.status(500).send({ status: 0, message: "Internal server error" });
    }
  }
);

// Fetch
router.get("/dataGet", async (req, res) => {
  try {
        await connectDB();
    
    const data = await bannerComponentModel
      .findOne()
      .select("-createdAt -updatedAt -__v");

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
