import mongoose from "mongoose";

async function connectMongo() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/products", { // Connect to the products database. Use IPv4 address instead of localhost
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

connectMongo();

// Define the schema for the products collection in MongoDB
const bookSchema = new mongoose.Schema({
  ID: Number,
  author: String,
  authorID: Number,
  title: String,
  releaseYear: Number
});

// Create a model for the products collection
const Books = mongoose.model("Books", bookSchema);

export { Books };
