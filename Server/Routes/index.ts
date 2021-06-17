import express from "express";

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
router.post("/register", ProcessRegisterPage);

// GET process logout page
router.get("/logout", ProcessLogoutPage);

export default router;
