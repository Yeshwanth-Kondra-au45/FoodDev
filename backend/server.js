import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

//DB config
connectDB();

//api endpoints
app.use("/api/food", foodRouter);

//listen
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
//mongodb+srv://yeshwanthyadavkondra:2731287346123418@cluster0.xmmdp.mongodb.net/?
