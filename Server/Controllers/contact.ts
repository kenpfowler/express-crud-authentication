import { Request, Response, NextFunction } from "express";
import ContactModel from "../Models/contact.js";

//import utility functions to bring logged in users username to each page
import { UserDisplayName } from "../Util/index.js";

//import validation functions
import { validationResult } from "express-validator";

//show page to CREATE new document
export function DisplayAddPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("add", {
    title: "Add Contact",
    username: UserDisplayName(req),
    messages: req.flash("addMessage"),
  });
}

//POST the CREATED document to the database
export function AddContact(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //validate data entered
  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    let errorStringArray = errors.array().map((validationResultObject) => {
      return validationResultObject.msg;
    });
    console.error({ ExpressValidatorError: errorStringArray });
    req.flash("addMessage", errorStringArray);
    return res.redirect("add");
  }

  //create new contact
  let newContact = new ContactModel({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  });
  //use mongoose to create in the database then redirect user
  ContactModel.create(newContact, (err, ContactModel) => {
    if (err) {
      console.error(err);
      res.end(err);
    } else {
      res.redirect("/businesscontacts");
    }
  });
}

//READ a collection from database
export function DisplayBusinessContacts(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //find everything in collection contactmodel is pointed to and sort in alphabetical order
  ContactModel.find({}, {}, { sort: { name: 1 } }, (err, businesscontacts) => {
    if (err) {
      console.error(err);
    }
    //render page with the vaiables found
    res.render("businesscontacts", {
      title: "Contacts",
      businesscontacts: businesscontacts,
      username: UserDisplayName(req),
    });
  });
}

//READ a document in the database that is to be UPDATED
export function DisplayEditPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //get the id property off the request objects parameters
  let id = req.params.id;
  //use the id requested and Mongoose Contact model to look for a match in the db
  //pass the id, empty objects for unused parameters and a callback funcion
  ContactModel.findById(id, {}, {}, (err, businessContactToEdit) => {
    if (err) {
      //if theres an error, log and
      console.error(err);
      res.end(err);
    }
    res.render("edit", {
      title: "Edit List",
      item: businessContactToEdit,
      username: UserDisplayName(req),
    });
  });
}

//UPDATE a specific document in the database
export function EditContact(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //get the id property off the request objects parameters
  let id = req.params.id;

  let updatedContact = new ContactModel({
    _id: id,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  });

  //use the id requested and Mongoose Contact model to look for a match in the db
  //pass the id, empty objects for unused parameters and a callback funcion
  ContactModel.updateOne({ _id: id }, updatedContact, {}, (err) => {
    if (err) {
      //if theres an error, log and end the request
      console.error(err);
      res.end(err);
    }
    res.redirect("/businesscontacts");
  });
}

//DELETE a document in the database
export function DeleteContact(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //get the id property off the request objects parameters
  let id = req.params.id;
  //use the id requested and Mongoose Contact model to look for a match in the db
  //pass the id, empty objects for unused parameters and a callback funcion
  ContactModel.remove({ _id: id }, (err) => {
    if (err) {
      //if theres an error, log and
      console.error(err);
      res.end(err);
    }
    res.redirect("/businesscontacts");
  });
}
