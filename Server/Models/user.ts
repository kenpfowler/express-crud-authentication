import Mongoose, { PassportLocalSchema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

// Create mongoose schema
const Schema = Mongoose.Schema;

//configure schema to interface with user collection
const UserSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    username: String,
  },
  {
    collection: "users",
    timestamps: true,
  }
);

//add passports local strategy functionality to the UserSchema
UserSchema.plugin(passportLocalMongoose);

//cast UserSchema as PassportLocalSchema
const UserModel = Mongoose.model("User", UserSchema as PassportLocalSchema);

//declare a custom data type in the global namespace
declare global {
  export type UserDocument = Mongoose.Document & {
    _id: String;
    firstName: String;
    lastName: String;
    email: String;
    username: String;
  };
}
export default UserModel;
