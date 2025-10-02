// routes/getStartedComponent.js
const express = require("express");
const router = express.Router();
const connectDB = require("../db");
const getStartedComponentModel = require("../models/getStartedComponentModel");
const { upload } = require("../middleware");
const supabase = require("../supabaseClient");

// Add or Update GetStarted Component (single document)
router.post(
  "/dataAdd",
  upload.fields([{ name: "backgroundImg", maxCount: 1 }]),
  async (req, res) => {
    try {
      let getStartedComponentData = { ...req.body };

      // Handle background image
      if (req.files && req.files.backgroundImg) {
        const file = req.files.backgroundImg[0];
        const fileName = `getstarted_${Date.now()}_${file.originalname}`;

        // Upload to Supabase
        const { error: uploadError } = await supabase.storage
          .from(process.env.SUPABASE_BUCKET)
          .upload(fileName, file.buffer, {
            contentType: file.mimetype,
            upsert: true,
          });

        if (uploadError) throw uploadError;

        // Get public URL
        const { data } = supabase.storage
          .from(process.env.SUPABASE_BUCKET)
          .getPublicUrl(fileName);

        getStartedComponentData.backgroundImg = data.publicUrl;
      } else if (req.body.backgroundImg) {
        // Keep old Supabase URL if no new upload
        getStartedComponentData.backgroundImg = req.body.backgroundImg;
      }

      // Upsert (since only 1 doc exists)
      const updatedDoc = await getStartedComponentModel.findOneAndUpdate(
        {},
        { $set: getStartedComponentData },
        { new: true, upsert: true }
      );

      res.send({ status: 1, message: "saved", data: updatedDoc });
    } catch (error) {
      console.error("Error saving GetStarted:", error);
      res.status(500).send({ status: 0, message: "Internal server error" });
    }
  }
);

// Fetch GetStarted data
router.get("/dataGet", async (req, res) => {
  try {
        await connectDB();
    
    const data = await getStartedComponentModel.findOne();
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
