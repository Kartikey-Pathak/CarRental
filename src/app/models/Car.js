import mongoose from "mongoose";

const RateSchema = new mongoose.Schema({
  label: String,
  price: String,
});

const CarSchema = new mongoose.Schema({
  name: String,
  location: String,
  image: String,
  tag: String,
  rates: [RateSchema],
});

export default mongoose.models.Car || mongoose.model("Car", CarSchema);
