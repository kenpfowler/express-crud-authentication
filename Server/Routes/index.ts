import express from "express";
import { check, validationResult } from "express-validator";

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
  RegisterUser,
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

// GET login page
router.get("/login", DisplayLoginPage);

// GET registration page
router.get("/register", DisplayRegisterPage);

// POST to registration page
router.post(
  "/register",
  [
    check("firstName")
      .trim()
      .isLength({ min: 3 })
      .escape()
      .withMessage("A first name is required."),
    check("lastName")
      .trim()
      .isLength({ min: 3 })
      .escape()
      .withMessage("A last name is required."),
    check("email")
      .trim()
      .isEmail()
      .normalizeEmail()
      .withMessage("A valid email address is required."),
    check("userName")
      .trim()
      .isLength({ min: 3 })
      .escape()
      .withMessage("A username is required."),
    check("password")
      .trim()
      .escape()
      .isStrongPassword()
      .withMessage("Choose a strong password"),
  ],
  RegisterUser
);

export default router;
