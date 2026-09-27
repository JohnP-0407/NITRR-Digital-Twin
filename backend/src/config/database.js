import mongoose from "mongoose";
import { env } from "./env.js";

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error.message);
});

mongoose.connection.on("disconnected", () => {
  console.warn("MongoDB connection unavailable.");
});

export async function connectDatabase() {
  try {
    await mongoose.connect(env.MONGODB_URI, {
      serverSelectionTimeoutMS: env.MONGODB_SERVER_SELECTION_TIMEOUT_MS,
    });
    console.info("MongoDB connected.");
  } catch (error) {
    console.error("MongoDB connection unavailable:", error.message);
  }
}