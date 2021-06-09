import express, { Request, Response, NextFunction } from "express";
import ContactModel from "../Models/contact.js";

//create and export controller to be used by the contact router

//READ contact information from database
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

//create controller to display an edit page
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
