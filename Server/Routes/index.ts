import express from "express";
import { check } from "express-validator";

const router = express.Router();

//import index controllers
import {
  DisplayHomePage,
  DisplayAboutPage,
  DisplayServicesPage,
  DisplayProjectsPage,
  DisplayContactPage,
  DisplayLoginPage,
  DisplayRegisterPage,
  ProcessRegisterPage,
  ProcessLogoutPage,
  ProcessLoginPage,
} from "../Controllers/index.js";

/* GET home page. */
router.get("/", DisplayHomePage);

/* GET home page if user types home */
router.get("/home", DisplayHomePage);

/* GET About page. */
router.get("/about", DisplayAboutPage);

/* GET Services page. */
router.get("/services", DisplayServicesPage);

/* GET Projects page. */
router.get("/projects", DisplayProjectsPage);

/* GET Contact Us page. */
router.get("/contact", DisplayContactPage);

//// LOGIN, LOGOUT and REGISTER

// GET login page
router.get("/login", DisplayLoginPage);

// POST to login page
router.post("/login", ProcessLoginPage);

// GET registration page
router.get("/register", DisplayRegisterPage);

// POST to registration page
router.post(
  "/register",
  [
    check("firstName")
      .trim()
      .isLength({ min: 2 })
      .escape()
      .withMessage("First name must be at least 2 letters long"),
    check("lastName")
      .trim()
      .isLength({ min: 2 })
      .escape()
      .withMessage("Last name must be at least 2 letters long"),
    check("email")
      .trim()
      .isEmail()
      .normalizeEmail()
      .withMessage("A valid email address is requried"),
    check("username")
      .trim()
      .isLength({ min: 6 })
      .escape()
      .withMessage("Username must be at minimum 6 letters long"),
    check("password")
      .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage(
        "Password is weak: Must be 8 characters long and contain: 1 number, 1 lowercase letter, 1 uppercase letter, and 1 symbol (!, @, # ect...)"
      ),
  ],
  ProcessRegisterPage
);

// GET process logout page
router.get("/logout", ProcessLogoutPage);

export default router;
