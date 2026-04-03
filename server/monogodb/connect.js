import e from "express";
import mongoose from "mongoose";
const connectDB = (url)=>{
  mongoose.set("strictQuery", true);
  mongoose.connect(url).then(()=>{
    console.log("MongoDB connected successfully");
  }).catch((error)=>{
    console.log("Error connecting to MongoDB:", error);
  });
}
export default connectDB;