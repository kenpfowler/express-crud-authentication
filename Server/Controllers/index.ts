import { Request, Response, NextFunction } from "express";
import UserModel from "../Models/user";
import passport from "passport";

//import utility functions
import { UserDisplayName } from "../Util";

//create and export controllers to be used by the index router
export function DisplayHomePage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Home",
    page: "home",
    username: UserDisplayName(req),
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
    username: UserDisplayName(req),
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
    username: UserDisplayName(req),
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
    username: UserDisplayName(req),
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
    username: UserDisplayName(req),
  });
}

export function DisplayLoginPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (!req.user) {
    return res.render("index", {
      title: "Login",
      page: "login",
      messages: req.flash("loginMessage"),
      username: UserDisplayName(req),
    });
  }
  return res.redirect("/businesscontacts");
}

export function ProcessLoginPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //call the passport authenticate function.
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("loginMessage", "Wrong Username and/or Password");
      return res.redirect("/login");
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      return res.redirect("/businesscontacts");
    });
  })(req, res, next);
}

export function DisplayRegisterPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // const errors = req.session.feedback ? req.session.feedback.errors : false;
  // req.session.feedback = {};
  if (!req.user) {
    return res.render("index", {
      title: "Register",
      page: "register",
      messages: req.flash("registerMessage"),
      username: UserDisplayName(req),
    });
  }
  return res.redirect("/businesscontacts");
}

// POST the CREATED user to the database
export function ProcessRegisterPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //create new user object using mongoose model
  let newUser = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
  });
  //user our passport-local-mongoose plugin to create a hashed password
  UserModel.register(newUser, req.body.password, (err) => {
    //handle registration errors
    if (err) {
      console.error(err);
      //display error to user and redirect to register page
      req.flash("registerMessage", "Registration Error");
      return res.redirect("/register");
    }
    //if registration is successful then login user
    return passport.authenticate("local")(req, res, () => {
      return res.redirect("/businesscontacts");
    });
  });
}

//CONTROL what happens if user logs out
export function ProcessLogoutPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //logout user and return to the login page
  req.logOut();
  res.redirect("/login");
}
