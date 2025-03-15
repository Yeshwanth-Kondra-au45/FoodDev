import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    image: image_filename,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
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

export { addFood };
