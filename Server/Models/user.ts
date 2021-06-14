import Mongoose, { PassportLocalSchema } from "mongoose";
import { userConnection } from "../Config/app";
import passportLocalMongoose from "passport-local-mongoose";

// Create mongoose schema
const Schema = Mongoose.Schema;

//configure schema to interface with user collection
const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    userName: String,
  },
  {
    collection: "users",
    timestamps: true,
  }
);

UserSchema.plugin(passportLocalMongoose);

const UserModel = Mongoose.model("User", UserSchema as PassportLocalSchema);

declare global {
  export type UserDocument = Mongoose.Document & {
    _id: String;
    firstName: String;
    lastName: String;
    email: String;
    userName: String;
  };
}
export default UserModel;
