import express, { Request, Response, NextFunction } from "express";
import ContactModel from "../Models/contact.js";

//create and export controller to be used by the contact router
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
