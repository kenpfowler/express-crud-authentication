import { Mode } from "fs";
import Mongoose from "mongoose";
const Schema = Mongoose.Schema;

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
