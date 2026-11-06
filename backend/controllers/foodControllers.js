import cloudinary from "../config/cloudinary.js";
import Food from "../models/Food.js";


const addFood = async (req, res) => {
  try {
    console.log("Reached addFood");

    console.log("REQ FILE:", req.file);
    console.log("REQ BODY:", req.body);

    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { resource_type: "image" },
          (error, result) => {
            if (error) return reject(error);

            console.log("CLOUDINARY RESULT:", result);

            resolve(result.secure_url);
          }
        )
        .end(req.file.buffer);
    });

    console.log("IMAGE URL:", result);

    const food = new Food({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: result
    });

    console.log("FOOD BEFORE SAVE:", food);

    await food.save();

    res.json({ success: true, message: "Food Added" });

  } catch (error) {
    console.error("ADD FOOD ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
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
