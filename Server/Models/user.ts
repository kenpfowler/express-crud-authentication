import Mongoose from "mongoose";
import { userConnection } from "../Config/app";

// Create mongoose schema
const Schema = Mongoose.Schema;

//configure schema to interface with user collection
const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    userName: String,
    password: String,
  },
  {
    collection: "users",
    timestamps: true,
  }
);

const UserModel = userConnection.model("User", UserSchema);

export default UserModel;
