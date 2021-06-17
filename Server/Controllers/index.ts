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

//DISPLAY login page
export function DisplayLoginPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //If the request doesnt have a user property display the login page
  if (!req.user) {
    return res.render("index", {
      title: "Login",
      page: "login",
      messages: req.flash("loginMessage"),
      username: UserDisplayName(req),
    });
  }
  //else redirect to the contacts page secure area
  return res.redirect("/businesscontacts");
}

//LOG IN the user
export function ProcessLoginPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //call the passport authenticate function.
  passport.authenticate("local", function (err, user, info) {
    //If theres an error then go to the next function
    if (err) {
      return next(err);
    }
    //if there's an error with the login credientials inform the user and redirect to the login page
    if (!user) {
      req.flash("loginMessage", "Wrong Username and/or Password");
      return res.redirect("/login");
    }
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      //else grant the user entry to contacts page
      return res.redirect("/businesscontacts");
    });
  })(req, res, next);
}

//DISPLAY the registration page to the user
export function DisplayRegisterPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //If the user is not logged in then display the registration page
  if (!req.user) {
    return res.render("index", {
      title: "Register",
      page: "register",
      messages: req.flash("registerMessage"),
      username: UserDisplayName(req),
    });
  }
  //else redirect them to the contacts page
  return res.redirect("/businesscontacts");
}

// POST the CREATED user to the database
export function ProcessRegisterPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  //create new user object using mongoose model and infomation in the request body
  let newUser = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
  });
  //use our passport-local-mongoose plugin and mongoose model to create a hashed password
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
