import express from "express"
import { addFood, foodList, removeFood } from "../controllers/foodControllers.js";
import upload from "../middleware/multer.js";

const foodRouter = express.Router();

foodRouter.post("/add", upload.single("image") ,addFood); 
foodRouter.get("/get-food", foodList);
foodRouter.post("/remove", removeFood);
foodRouter.get("/list", foodList);

export default foodRouter;
