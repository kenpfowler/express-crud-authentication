import Mongoose from "mongoose";

//shorthand for mongoose schema
const Schema = Mongoose.Schema;

const ContactSchema = new Schema(
  {
    Name: String,
    Phone: String,
    Email: String,
  },
  {
    collection: "businesscontacts",
  }
);

const ContactModel = Mongoose.model("Contacts", ContactSchema);

export default ContactModel;
