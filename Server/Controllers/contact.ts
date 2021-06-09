import express, { Request, Response, NextFunction } from "express";
import ContactModel from "../Models/contact.js";

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
