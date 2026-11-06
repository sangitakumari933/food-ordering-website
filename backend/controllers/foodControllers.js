import cloudinary from "../config/cloudinary.js";
import Food from "../models/Food.js";


const addFood = async (req, res) => {
  try {
    console.log("reached addFood");
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ resource_type: "image" }, (error, result) => {
          if (error) return reject(error);

          resolve(result.secure_url);
        })
        .end(req.file.buffer);
    });
    const food = new Food({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: result
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
    console.log("reached")
    const foods = await Food.find({});
    console.log(foods);
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

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
};

export { addFood, foodList, removeFood };
