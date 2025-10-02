const express = require("express");
const router = express.Router();
const connectDB = require("../db");
const VideoComponentModel = require("../models/VideoModel");




router.post(
  "/dataAdd", async (req, res) => {
    try {
      const VideoComponentData = {
        ...req.body,
      };

      const updatedDoc = await VideoComponentModel.findOneAndUpdate(
        {}, // only one landing page
        { $set: VideoComponentData },
        { new: true, upsert: true }
      );

      res.send({ status: 1, message: "saved", data: updatedDoc });
    } catch (error) {
      console.error("Error saving:", error);
      res.status(500).send({ status: 0, message: "Internal server error" });
    }
  }
);



router.get("/dataGet", async (req, res) => {
  try {
        await connectDB();
    
    const data = await VideoComponentModel.findOne(); // single landing page
    res.status(200).send({
      status: 1,
      message: "success",
      data: data,
    });
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).send({ status: 0, message: "Internal server error" });
  }
});




module.exports = router