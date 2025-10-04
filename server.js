// =======================
//   Imports
// =======================
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http");
require("dotenv").config();
const connectDB = require("./db");


connectDB().catch((err) => {
  console.error(" Failed to connect to MongoDB, exiting...");
  process.exit(1); // Stop the app if DB connection fails
});

// =======================
//   App setup
// =======================
const app = express();

// ----- Middlewares -----
app.use(
  cors({
    origin: [
      "http://localhost:5173", 
      "http://localhost:3000",  // Local dev
      "https://assana-website.vercel.app",
      "https://assana-doctorwebsite-dashboard1.vercel.app" // Deployed frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =======================


// =======================
//   Routes
// =======================

// Landing page
app.use("/api/landPage", require("./controllers/landingPagecontroller"));

// Banner
app.use("/api/bannerComponent", require("./controllers/bannerComponentController"));

// Why Assana
app.use("/api/whyassanaComponent", require("./controllers/whyAssanaComponentController"));

// Services
app.use("/api/servicesComponent", require("./controllers/servicesComponentController"));

// Asked Questions
app.use("/api/askedQuestionsComponent", require("./controllers/askedQuestionsComponentController"));

// Patient Feedback
app.use("/api/patientFeedbackComponent", require("./controllers/patientFeedbacksComponentController"));

// Get Started
app.use("/api/getStartedComponent", require("./controllers/getStartedComponentController"));

// About Page
app.use("/api/aboutPage", require("./controllers/About/aboutPageComtrollers"));

// Colorectal Symptoms
app.use("/api/colorectalSymptomsPage", require("./controllers/ColorectalSymptomsController/ColorectalSymptomsPageControllers"));

// Piles / Haemorrhoids
app.use("/api/pilesorHaemorrhoidsPage", require("./controllers/PilesorHaemorrhoidsController/PilesorHaemorrhoidsPageController"));

// Anal Fistula
app.use("/api/analFistulaPage", require("./controllers/AnalFistulaController/AnalFistulaPageController"));

// Banding of Piles
app.use("/api/bandingofPilesPage", require("./controllers/BandingofPilesController/BandingofPilesPagController"));

// Laser Surgery
app.use("/api/laserSurgeryPage", require("./controllers/LaserSurgeryController/LaserSurgeryPageController"));

// Anal Fissure
app.use("/api/analFissurePage", require("./controllers/AnalFissureController/AnalFissurePageController"));

// After Anal Surgery
app.use("/api/afterAnalSurgeryPage", require("./controllers/AfterAnalSurgeryController/AfterAnalSurgeryPageController"));

// Pelvic Floor
app.use("/api/pelvicFloorPage", require("./controllers/PelvicFloorController/PelvicFloorPageController"));

// Colon & Rectal Cancer
app.use("/api/colonRectalCancerPage", require("./controllers/ColonRectalCancerController/ColonRectalCancerPageController"));

// Gut-Brain Axis
app.use("/api/gutBrainAxisPage", require("./controllers/GutBrainAxisController/GutBrainAxisPageController"));

// Colon Hydrotherapy
app.use("/api/colonHydrotherapyPage", require("./controllers/ColonHydrotherapyController/ColonHydrotherapyPageController"));

// Assana Butt
app.use("/api/assanaButtPage", require("./controllers/AssanaButtController/AssanaButtPageController"));

// New Moms
app.use("/api/newMomsPage", require("./controllers/NewMomsController/NewMomsPageController"));

// Menopause
app.use("/api/menopausePage", require("./controllers/MenopauseController/MenopausePageController"));

// Senior Citizens
app.use("/api/seniorcitizensPage", require("./controllers/SeniorcitizensController/SeniorcitizensPageController"));

// Gut Wellness (double-check this path spelling!)
app.use("/api/gutWellnessPage", require("./controllers/GutWellnessController/GutWellnessPageController"));

// Home Why Assana
app.use("/api/homewhyassanaPage", require("./controllers/HomewhyassanaController"));


// Home Why Assana
app.use("/api/assanaTreat", require("./controllers/assanaTreatController"));

app.use("/api/productPage", require("./controllers/ProductController/ProductPageController"));
app.use("/api/video", require("./controllers/VideoController"));

// --------------------------------------------------------------------------------------

app.use("/api/colorectalSymptomsBanner", require("./controllers/ColorectalSymptomsController/ColorectalSymptomsBanner"));
app.use("/api/colorectalSymptomsProblems", require("./controllers/ColorectalSymptomsController/ColorectalSymptomsProblems"));
app.use("/api/colorectalSymptomsWhyAssana", require("./controllers/ColorectalSymptomsController/ColorectalSymptomsWhyAssana"));


app.use("/api/pilesorHaemorrhoidsBanner", require("./controllers/PilesorHaemorrhoidsController/PilesorHaemorrhoidsBanner"));
app.use("/api/pilesorHaemorrhoidsProblems", require("./controllers/PilesorHaemorrhoidsController/PilesorHaemorrhoidsProblems"));

app.use("/api/bandingofPilesBanner", require("./controllers/BandingofPilesController/BandingofPilesBanner"));
app.use("/api/bandingofPilesProblems", require("./controllers/BandingofPilesController/BandingofPilesProblems"));
app.use("/api/bandingofPilesWhyAssana", require("./controllers/BandingofPilesController/BandingofPilesWhyAssana"));


app.use("/api/laserSurgeryBanner", require("./controllers/LaserSurgeryController/LaserSurgeryBanner"));
app.use("/api/laserSurgeryProblems", require("./controllers/LaserSurgeryController/LaserSurgeryProblems"));
app.use("/api/laserSurgeryWhyAssana", require("./controllers/LaserSurgeryController/LaserSurgeryWhyAssana"));

app.use("/api/analFissureBanner", require("./controllers/AnalFissureController/AnalFissureBanner"));
app.use("/api/analFissureProblems", require("./controllers/AnalFissureController/AnalFissureProblems"));


app.use("/api/analFistulaBanner", require("./controllers/AnalFistulaController/AnalFistulaBanner"));
app.use("/api/analFistulaProblems", require("./controllers/AnalFistulaController/AnalFistulaProblems"));


app.use("/api/afterAnalSurgeryBanner", require("./controllers/AfterAnalSurgeryController/AfterAnalSurgeryBanner"));
app.use("/api/afterAnalSurgeryProblems", require("./controllers/AfterAnalSurgeryController/AfterAnalSurgeryProblems"));


app.use("/api/pelvicFloorBanner", require("./controllers/PelvicFloorController/PelvicFloorBanner"));
app.use("/api/pelvicFloorProblems", require("./controllers/PelvicFloorController/PelvicFloorProblems"));
app.use("/api/pelvicFloorWhyAssana", require("./controllers/PelvicFloorController/PelvicFloorWhyAssana"));


app.use("/api/colonRectalCancerBanner", require("./controllers/ColonRectalCancerController/ColonRectalCancerBanner"));
app.use("/api/colonRectalCancerProblems", require("./controllers/ColonRectalCancerController/ColonRectalCancerProblems"));
app.use("/api/colonRectalCancerWhyAssana", require("./controllers/ColonRectalCancerController/ColonRectalCancerWhyAssana"));


app.use("/api/gutWellnessBanner", require("./controllers/GutWellnessController/GutWellnessBanner"));
app.use("/api/gutWellnessProblems", require("./controllers/GutWellnessController/GutWellnessProblems"));


app.use("/api/gutBrainAxisBanner", require("./controllers/GutBrainAxisController/GutBrainAxisBanner"));
app.use("/api/gutBrainAxisProblems", require("./controllers/GutBrainAxisController/GutBrainAxisProblems"));
app.use("/api/gutBrainAxisWhyAssana", require("./controllers/GutBrainAxisController/GutBrainAxisWhyAssana"));


app.use("/api/colonHydrotherapyBanner", require("./controllers/ColonHydrotherapyController/ColonHydrotherapyBanner"));
app.use("/api/colonHydrotherapyProblems", require("./controllers/ColonHydrotherapyController/ColonHydrotherapyProblems"));
app.use("/api/colonHydrotherapyWhyAssana", require("./controllers/ColonHydrotherapyController/ColonHydrotherapyWhyAssana"));


app.use("/api/assanaButtBanner", require("./controllers/AssanaButtController/AssanaButtBanner"));
app.use("/api/assanaButtProblems", require("./controllers/AssanaButtController/AssanaButtProblems"));
app.use("/api/assanaButtWhyAssana", require("./controllers/AssanaButtController/AssanaButtWhyAssana"));


app.use("/api/newMomsBanner", require("./controllers/NewMomsController/NewMomsBanner"));
app.use("/api/newMomsProblems", require("./controllers/NewMomsController/NewMomsProblems"));




// =======================
//   Export
// =======================

// For Vercel (serverless)
module.exports = app;
module.exports.handler = serverless(app);

// For local development only
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () =>
    console.log(` Server running on http://localhost:${PORT}`)
  );
}
