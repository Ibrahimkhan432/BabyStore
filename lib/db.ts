import mongoose from "mongoose";
import { MESSAGES } from "./helpers/messages";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  MESSAGES.DB_ERROR;
}

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected ");
  } catch (error) {
    console.error("MongoDB connection failed ", error);
  }
};
