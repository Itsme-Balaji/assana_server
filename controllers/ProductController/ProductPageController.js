// routes/landingPage.js
const express = require("express");
const router = express.Router();
const connectDB = require("../../db");

const productPageModel = require("../../models/Products/ProductsModel");
const { upload } = require("../../middleware");
const supabase = require("../../supabaseClient");

// Upload aboutBanner, founder, co_founder to Supabase
router.post(
  "/dataAdd",
  upload.fields([
      { name: "productBannerImg", maxCount: 1 },
      { name: "productImg1", maxCount: 1 },
      { name: "productImg2", maxCount: 1 },
      { name: "productImg3", maxCount: 1 },
      { name: "productImg4", maxCount: 1 },
      { name: "productImg5", maxCount: 1 },





  ]),
  async (req, res) => {
    try {
      let existingDoc = await productPageModel.findOne();

      const productPageData = { ...req.body };

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


      productPageData.productBannerImg = await uploadToSupabase(
        req.files?.productBannerImg?.[0],
        req.body.productBannerImgOld || existingDoc?.productBannerImg
      );

      productPageData.productImg1 = await uploadToSupabase(
        req.files?.productImg1?.[0],
        req.body.productImg1Old || existingDoc?.productImg1
      );

       productPageData.productImg2 = await uploadToSupabase(
        req.files?.productImg2?.[0],
        req.body.productImg2Old || existingDoc?.productImg2
      );

       productPageData.productImg3 = await uploadToSupabase(
        req.files?.productImg3?.[0],
        req.body.productImg3Old || existingDoc?.productImg3
      );

       productPageData.productImg4 = await uploadToSupabase(
        req.files?.productImg4?.[0],
        req.body.productImg4Old || existingDoc?.productImg4
      );

       productPageData.productImg5 = await uploadToSupabase(
        req.files?.productImg5?.[0],
        req.body.productImg5Old || existingDoc?.productImg5
      );

   


      // Save or update
      const updatedDoc = await productPageModel.findOneAndUpdate(
        {},
        { $set: productPageData },
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
    
    const data = await productPageModel.findOne().select(
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
