import { Request, Response, NextFunction, request } from "express";
import { validationResult } from "express-validator";
import UserModel from "../Models/user";

//create and export controllers to be used by the index router
export function DisplayHomePage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //store number of sessions in a variable and print to console
  if (req.session.isNew) {
    req.session.visitCount = 0;
  }
  req.session.visitCount += 1;
  console.log(`Number of sessions: ${req.session.visitCount}`);
  res.render("index", {
    title: "Home",
    page: "home",
  });
}

export function DisplayAboutPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "About",
    page: "about",
  });
}

export function DisplayServicesPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Services",
    page: "services",
  });
}
export function DisplayProjectsPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Projects",
    page: "projects",
  });
}

export function DisplayContactPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Contact",
    page: "contact",
  });
}

export function DisplayLoginPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Login",
    page: "login",
  });
}

export function DisplayRegisterPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // const errors = req.session.feedback ? req.session.feedback.errors : false;
  // req.session.feedback = {};

  res.render("index", {
    title: "Register",
    page: "register",
    // errors: errors,
  });
}

// POST the CREATED user to the database
export function RegisterUser(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   req.session.feedback = {
  //     errors: errors.array(),
  //   };
  //   res.redirect("/register");
  // }

  let newUser = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    userName: req.body.userName,
    password: req.body.password,
  });

  UserModel.create(newUser, (err, userModel) => {
    if (err) {
      console.error(err);
      res.end(err);
    } else {
      res.redirect("/businesscontacts");
    }
  });
}
