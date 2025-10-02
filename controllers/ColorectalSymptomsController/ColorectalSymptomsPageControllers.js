// routes/landingPage.js
const express = require("express");
const router = express.Router();
const connectDB = require("../../db");

const colorectalSymptomsPageModel = require("../../models/ColorectalSymptomsModel/ColorectalSymptomsPageModel");
const { upload } = require("../../middleware");
const supabase = require("../../supabaseClient");

// Upload aboutBanner, founder, co_founder to Supabase
router.post(
  "/dataAdd",
  upload.fields([
    { name: "colorectalBannerImg", maxCount: 1 },
    { name: "needToKnowImg1", maxCount: 1 },
    { name: "needToKnowImg2", maxCount: 1 },
    { name: "needToKnowImg3", maxCount: 1 },
    { name: "needToKnowImg4", maxCount: 1 },
    { name: "needToKnowImg5", maxCount: 1 },
    { name: "needToKnowImg6", maxCount: 1 },
    { name: "whyAssanaSolution1Img", maxCount: 1 },
    { name: "whyAssanaSolution2Img", maxCount: 1 },
    { name: "whyAssanaSolution3Img", maxCount: 1 },
    { name: "whyAssanaSolution4Img", maxCount: 1 },



  ]),
  async (req, res) => {
    try {
      let existingDoc = await colorectalSymptomsPageModel.findOne();

      const colorectalSymptomsPageData = { ...req.body };

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
      colorectalSymptomsPageData.colorectalBannerImg = await uploadToSupabase(
        req.files?.colorectalBannerImg?.[0],
        req.body.colorectalBannerImgOld || existingDoc?.colorectalBannerImg
      );

      colorectalSymptomsPageData.needToKnowImg1 = await uploadToSupabase(
        req.files?.needToKnowImg1?.[0],
        req.body.needToKnowImg1Old || existingDoc?.needToKnowImg1
      );

      colorectalSymptomsPageData.needToKnowImg2 = await uploadToSupabase(
        req.files?.needToKnowImg2?.[0],
        req.body.needToKnowImg2Old || existingDoc?.needToKnowImg2
      );

      colorectalSymptomsPageData.needToKnowImg3 = await uploadToSupabase(
        req.files?.needToKnowImg3?.[0],
        req.body.needToKnowImg3Old || existingDoc?.needToKnowImg3
      );

      colorectalSymptomsPageData.needToKnowImg4 = await uploadToSupabase(
        req.files?.needToKnowImg4?.[0],
        req.body.needToKnowImg4Old || existingDoc?.needToKnowImg4
      );

      colorectalSymptomsPageData.needToKnowImg5 = await uploadToSupabase(
        req.files?.needToKnowImg5?.[0],
        req.body.needToKnowImg5Old || existingDoc?.needToKnowImg5
      );


      colorectalSymptomsPageData.needToKnowImg6 = await uploadToSupabase(
        req.files?.needToKnowImg6?.[0],
        req.body.needToKnowImg6Old || existingDoc?.needToKnowImg6
      );


      colorectalSymptomsPageData.whyAssanaSolution1Img = await uploadToSupabase(
        req.files?.whyAssanaSolution1Img?.[0],
        req.body.whyAssanaSolution1ImgOld || existingDoc?.whyAssanaSolution1Img
      );

      colorectalSymptomsPageData.whyAssanaSolution2Img = await uploadToSupabase(
        req.files?.whyAssanaSolution2Img?.[0],
        req.body.whyAssanaSolution2ImgOld || existingDoc?.whyAssanaSolution2Img
      );

      colorectalSymptomsPageData.whyAssanaSolution3Img = await uploadToSupabase(
        req.files?.whyAssanaSolution3Img?.[0],
        req.body.whyAssanaSolution3ImgOld || existingDoc?.whyAssanaSolution3Img
      );

      colorectalSymptomsPageData.whyAssanaSolution4Img = await uploadToSupabase(
        req.files?.whyAssanaSolution4Img?.[0],
        req.body.whyAssanaSolution4ImgOld || existingDoc?.whyAssanaSolution4Img
      );

      // Save or update
      const updatedDoc = await colorectalSymptomsPageModel.findOneAndUpdate(
        {},
        { $set: colorectalSymptomsPageData },
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
    
    const data = await colorectalSymptomsPageModel.findOne().select(
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
