import express from "express";
const router = express.Router();

//bring in index controllers
import {
  DisplayHomePage,
  DisplayAboutPage,
  DisplayServicesPage,
  DisplayProjectsPage,
  DisplayContactPage,
  DisplayLoginPage,
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

router.get("/login", DisplayLoginPage);

export default router;
