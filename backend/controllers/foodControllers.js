import cloudinary from "../config/cloudinary.js";
import Food from "../models/Food.js";
import fs from "fs";

const addFood = async (req, res) => {
  try {
    console.log("reached addFood")
  const result = await cloudinary.uploader.upload(req.file.path);
  console.log("dead")
  fs.unlinkSync(req.file.path);
  const food = new Food({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: result.secure_url,
  });
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
  console.log("success");
};

// all food list
const foodList = async (req, res) => {
  try {
    const foods = await Food.find({});
    res.json({success:true, data:foods});
  } catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"});
  }
}

//remove food item
const removeFood = async (req, res) => {
  try {
    const food = await Food.findById(req.body.id);
    if (food.image) {
      await cloudinary.uploader.destroy(food.image);
    }
     
    await Food.findByIdAndDelete(req.body.id);

    res.json({
      success: true,
      message: "Food removed successfully",
    });
  } catch (error) {
     console.log(error);

    res.status(500).json({
      success: false,
      message: "Error",
    });
  }
}

export { addFood, foodList, removeFood};
