// routes/landingPage.js
const express = require("express");
const router = express.Router();
const connectDB = require("../../db");

const assanaButtPageModel = require("../../models/AssanaButtModel/AssanaButtPageModel");
const { upload } = require("../../middleware");
const supabase = require("../../supabaseClient");

// Upload aboutBanner, founder, co_founder to Supabase
router.post(
  "/dataAdd",
  upload.fields([

    { name: "needToKnowImg", maxCount: 1 },
    { name: "whyAssanaSolution1Img", maxCount: 1 },
    { name: "whyAssanaSolution2Img", maxCount: 1 },
    { name: "whyAssanaSolution3Img", maxCount: 1 },
    { name: "whyAssanaSolution4Img", maxCount: 1 },



  ]),
  async (req, res) => {
    try {
      let existingDoc = await assanaButtPageModel.findOne();

      const assanaButtPageData = { ...req.body };

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


      assanaButtPageData.needToKnowImg = await uploadToSupabase(
        req.files?.needToKnowImg?.[0],
        req.body.needToKnowImgOld || existingDoc?.needToKnowImg
      );


      assanaButtPageData.whyAssanaSolution1Img = await uploadToSupabase(
        req.files?.whyAssanaSolution1Img?.[0],
        req.body.whyAssanaSolution1ImgOld || existingDoc?.whyAssanaSolution1Img
      );

      assanaButtPageData.whyAssanaSolution2Img = await uploadToSupabase(
        req.files?.whyAssanaSolution2Img?.[0],
        req.body.whyAssanaSolution2ImgOld || existingDoc?.whyAssanaSolution2Img
      );

      assanaButtPageData.whyAssanaSolution3Img = await uploadToSupabase(
        req.files?.whyAssanaSolution3Img?.[0],
        req.body.whyAssanaSolution3ImgOld || existingDoc?.whyAssanaSolution3Img
      );

      assanaButtPageData.whyAssanaSolution4Img = await uploadToSupabase(
        req.files?.whyAssanaSolution4Img?.[0],
        req.body.whyAssanaSolution4ImgOld || existingDoc?.whyAssanaSolution4Img
      );

      // Save or update
      const updatedDoc = await assanaButtPageModel.findOneAndUpdate(
        {},
        { $set: assanaButtPageData },
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
    
    const data = await assanaButtPageModel.findOne().select(
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
