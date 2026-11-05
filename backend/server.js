import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const port = 4000
dotenv.config();

//middleware
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5174","https://food-ordering-website-5mdq-bj1552ulv.vercel.app/"],
    credentials: true
}));

app.use(cookieParser());

app.get("/", (req, res)=>{
  res.send("API Working")
})

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);



export default app;