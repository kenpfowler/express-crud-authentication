import Mongoose from "mongoose";

// Create mongoose schema
const Schema = Mongoose.Schema;

//configure schema to interface with user collection
const UserSchema = new Schema(
  {
    Username: String,
    Password: String,
    PhoneNumber: String,
    Age: Number,
    Program: String,
  },
  {
    collection: "users",
  }
);

const Model = Mongoose.model("User", UserSchema);

export default Model;
