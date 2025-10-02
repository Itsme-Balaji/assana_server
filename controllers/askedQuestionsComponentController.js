const express = require("express");
const router = express.Router();
const connectDB = require("../db");
const askedQuestionsComponentModel = require("../models/askedQuestionsComponentModel");

// Add or Update multiple questions
router.post("/dataAdd", async (req, res) => {
  try {
    const body = req.body;

    // Ensure it's always an array
    const questions = Array.isArray(body) ? body : [body];

    const results = [];

    for (const q of questions) {
      if (q._id) {
        // Update existing document
        const updated = await askedQuestionsComponentModel.findByIdAndUpdate(
          q._id,
          { $set: q },
          { new: true }
        );
        results.push(updated);
      } else {
        // Insert new document
        const newQ = new askedQuestionsComponentModel(q);
        const saved = await newQ.save();
        results.push(saved);
      }
    }

    res.send({ status: 1, message: "Saved successfully", data: results });
  } catch (error) {
    console.error("Error saving:", error);
    res.status(500).send({ status: 0, message: "Internal server error" });
  }
});

// Fetch all
router.get("/dataGet", async (req, res) => {
  try {
    await connectDB();
    const data = await askedQuestionsComponentModel.find();
    res.status(200).send({ status: 1, message: "success", data });
  } catch (error) {
    console.error("Fetch error:", error); // already here
    res.status(500).send({ status: 0, message: error.message }); // 👈 show exact error
  }
});












// Delete by ID
router.delete("/dataDelete/:id", async (req, res) => {
  try {
    await askedQuestionsComponentModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ status: 1, message: "Deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).send({ status: 0, message: "Internal server error" });
  }
});

module.exports = router;
