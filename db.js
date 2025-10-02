const mongoose = require("mongoose");

let isConnected = false;

async function connectDB() {
  if (isConnected) {
    return; //  reuse existing connection
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 20000,
    });

    isConnected = db.connections[0].readyState === 1;
    console.log(" MongoDB connected");
  } catch (err) {
    console.error(" MongoDB connection error:", err.message);
    throw err;
  }
}

module.exports = connectDB;
