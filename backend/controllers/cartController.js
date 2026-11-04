import {User} from "../models/User.js";

// add items to user cart
const addToCart = async (req, res) => {
  try {
    let userData = await User.findOne({ _id: req.userId });
    const cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await User.findByIdAndUpdate(req.userId, { cartData });
    res.json({ success: true, message: "Added To Cart", cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//remove item from user cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await User.findById(req.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await User.findByIdAndUpdate(req.userId, { cartData });
    res.json({ success: true, message: "Removed from Cart", cartData });
  } catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"});
  }
};


//fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await User.findById(req.userId);
    let cartData =  userData.cartData;
    res.json({success:true, cartData});
  } catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"});
  }
};

export { addToCart, removeFromCart, getCart };
