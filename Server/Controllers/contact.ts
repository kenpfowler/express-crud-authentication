import { Request, Response, NextFunction } from "express";
import ContactModel from "../Models/contact.js";

//show page to CREATE new document
export function DisplayAddPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("add", { title: "Add Contact" });
}

//POST the CREATED document to the database
export function AddContact(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let newContact = new ContactModel({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
  });

  ContactModel.create(newContact, (err, ContactModel) => {
    if (err) {
      console.error(err);
      res.end(err);
    } else {
      res.redirect("/businesscontacts");
    }
  });
}

//READ a document from database
export function DisplayBusinessContacts(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  ContactModel.find((err, businesscontacts) => {
    if (err) {
      console.error(err);
    }
    res.render("businesscontacts", {
      title: "Contacts",
      businesscontacts: businesscontacts,
    });
  });
}

//UPDATE a document in the database
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
    res.render("edit", { title: "Edit List", item: businessContactToEdit });
  });
}

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
