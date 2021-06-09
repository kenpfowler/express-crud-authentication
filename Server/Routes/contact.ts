import express from "express";
const router = express.Router();

//import contact controllers
import {
  DisplayBusinessContacts,
  DisplayEditPage,
} from "../Controllers/contact";

//GET businesscontacts page
router.get("/", DisplayBusinessContacts);

router.get("businesscontacts", DisplayBusinessContacts);
//Display an interface to edit the DB
router.get("/edit/:id", DisplayEditPage);

export default router;
