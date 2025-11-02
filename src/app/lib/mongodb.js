import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export default async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "travel_explores",
    });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
