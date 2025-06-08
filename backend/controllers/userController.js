import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Function to create a new user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    // Create and send token
    const token = createToken(user._id);
    res.status(200).json({ success: true, token });
  } catch (err) {
    return res
      .status(400)
      .json({ success: false, message: err.message || "Something went wrong" });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    // Validate email and password
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }
    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({
        success: false,
        message:
          "Password must be at least 8 characters long and include uppercase, lowercase, number, and symbol",
      });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ name, email, password: hashedPassword });
    const newUser = await user.save();
    // Create a token for the user
    const token = createToken(newUser._id);
    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      token,
    });
  } catch (err) {
    return res
      .status(400)
      .json({ success: false, message: err.message || "Something went wrong" });
  }
};

// // Function to get user data
// const getUser = async (req, res) => {

// }
// // Function to update user data
// const updateUser = async (req, res) => {

// }

export { loginUser, registerUser };
