// routes/landingPage.js
const express = require("express");
const router = express.Router();
const connectDB = require("../../db");

const ColonRectalCancerPageModel = require("../../models/Colon&RectalCancer/Colon&RectalCancer");
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

    { name: "whyAssanaSolution1Img", maxCount: 1 },
    { name: "whyAssanaSolution2Img", maxCount: 1 },
    { name: "whyAssanaSolution3Img", maxCount: 1 },
    { name: "whyAssanaSolution4Img", maxCount: 1 },

    { name: "whyAssanaSolution5Img", maxCount: 1 },
    { name: "whyAssanaSolution6Img", maxCount: 1 },
    { name: "whyAssanaSolution7Img", maxCount: 1 },
    { name: "whyAssanaSolution8Img", maxCount: 1 },



  ]),
  async (req, res) => {
    try {
      let existingDoc = await ColonRectalCancerPageModel.findOne();

      const colonRectalCancerPageData = { ...req.body };

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
      colonRectalCancerPageData.colorectalBannerImg = await uploadToSupabase(
        req.files?.colorectalBannerImg?.[0],
        req.body.colorectalBannerImgOld || existingDoc?.colorectalBannerImg
      );

      colonRectalCancerPageData.needToKnowImg1 = await uploadToSupabase(
        req.files?.needToKnowImg1?.[0],
        req.body.needToKnowImg1Old || existingDoc?.needToKnowImg1
      );

      colonRectalCancerPageData.needToKnowImg2 = await uploadToSupabase(
        req.files?.needToKnowImg2?.[0],
        req.body.needToKnowImg2Old || existingDoc?.needToKnowImg2
      );

      colonRectalCancerPageData.needToKnowImg3 = await uploadToSupabase(
        req.files?.needToKnowImg3?.[0],
        req.body.needToKnowImg3Old || existingDoc?.needToKnowImg3
      );



      colonRectalCancerPageData.whyAssanaSolution1Img = await uploadToSupabase(
        req.files?.whyAssanaSolution1Img?.[0],
        req.body.whyAssanaSolution1ImgOld || existingDoc?.whyAssanaSolution1Img
      );

      colonRectalCancerPageData.whyAssanaSolution2Img = await uploadToSupabase(
        req.files?.whyAssanaSolution2Img?.[0],
        req.body.whyAssanaSolution2ImgOld || existingDoc?.whyAssanaSolution2Img
      );

      colonRectalCancerPageData.whyAssanaSolution3Img = await uploadToSupabase(
        req.files?.whyAssanaSolution3Img?.[0],
        req.body.whyAssanaSolution3ImgOld || existingDoc?.whyAssanaSolution3Img
      );

      colonRectalCancerPageData.whyAssanaSolution4Img = await uploadToSupabase(
        req.files?.whyAssanaSolution4Img?.[0],
        req.body.whyAssanaSolution4ImgOld || existingDoc?.whyAssanaSolution4Img
      );

      colonRectalCancerPageData.whyAssanaSolution5Img = await uploadToSupabase(
        req.files?.whyAssanaSolution5Img?.[0],
        req.body.whyAssanaSolution5ImgOld || existingDoc?.whyAssanaSolution5Img
      );

      colonRectalCancerPageData.whyAssanaSolution6Img = await uploadToSupabase(
        req.files?.whyAssanaSolution6Img?.[0],
        req.body.whyAssanaSolution6ImgOld || existingDoc?.whyAssanaSolution6Img
      );

      colonRectalCancerPageData.whyAssanaSolution7Img = await uploadToSupabase(
        req.files?.whyAssanaSolution7Img?.[0],
        req.body.whyAssanaSolution7ImgOld || existingDoc?.whyAssanaSolution7Img
      );

      colonRectalCancerPageData.whyAssanaSolution8Img = await uploadToSupabase(
        req.files?.whyAssanaSolution8Img?.[0],
        req.body.whyAssanaSolution8ImgOld || existingDoc?.whyAssanaSolution8Img
      );

      // Save or update
      const updatedDoc = await ColonRectalCancerPageModel.findOneAndUpdate(
        {},
        { $set: colonRectalCancerPageData },
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
    
    const data = await ColonRectalCancerPageModel.findOne().select(
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
