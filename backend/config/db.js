import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://yeshwanthyadavkondra:7032081349@cluster0.dvzlads.mongodb.net/food-delivery"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
// mongoose.connect('mongodb://yeshwanthyadavkondra:7032081349@cluster0.dvzlads.mongodb.net/food-delivery?directConnection=true', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// mongodb+srv://yeshwanthyadavkondra:7032081349@cluster0.dvzlads.mongodb.net/?