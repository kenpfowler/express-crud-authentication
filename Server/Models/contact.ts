import Mongoose from "mongoose";

//shorthand for mongoose schema
const Schema = Mongoose.Schema;

//configure schema to interface with businesscontacts collection
const ContactSchema = new Schema(
  {
    name: String,
    phone: String,
    email: String,
  },
  {
    collection: "businesscontacts",
    timestamps: true,
  }
);

const ContactModel = Mongoose.model("Contacts", ContactSchema);

export default ContactModel;
