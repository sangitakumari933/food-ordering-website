import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import { generateToken } from "../utils/utils.js";

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    return res
      .status(201)
      .cookie("token", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .json({
        message: "Account created succesully",
        userData: user,
        success: true,
      });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const registeredUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    //checking is user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    if (password.length < 5) {
      return res.json({
        success: false,
        message: "please enter a strong password",
      });
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    console.log(user._id);

    const token = generateToken(user._id);

    return res
      .status(201)
      .cookie("token", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .json({
        message: "Account created succesully",
        userData: user,
        success: true,
      });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Logout failed",
    });
  }
};

export const checkAuth = (req, res) => {
  res.json({
    success: true,
  });
};

export { loginUser, registeredUser, logoutUser };
