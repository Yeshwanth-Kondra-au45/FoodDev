import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    return res
      .status(200)
      .json({ success: true, message: "Food added successfully" });
  } catch (err) {
    return res
      .status(400)
      .json({ success: false, message: err.message || "Something went wrong" });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    return res.status(200).json({ success: true, data: foods });
  } catch (err) {
    return res
      .status(400)
      .json({ success: false, message: err.message || "Something went wrong" });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    return res
      .status(200)
      .json({ success: true, message: "Food removed successfully" });
  } catch (err) {
    return res
      .status(400)
      .json({ success: false, message: err.message || "Something went wrong" });
  }
};
export { addFood, listFood, removeFood };
