import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB: ${connect.connection.host}`);
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
    process.exit(1); // 1 is failure, 0 is success
  }
};
