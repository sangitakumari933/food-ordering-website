import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://kumarisangita8800_db_user:efFMihj6mSYVI2Kk@cluster0.thfd9a9.mongodb.net/food-del').then(()=>console.log("DB connected"));
}