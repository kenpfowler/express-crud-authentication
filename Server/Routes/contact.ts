import express from "express";
const router = express.Router();

//import contact controllers
import { DisplayBusinessContacts } from "../Controllers/contact";

//GET businesscontacts page
router.get("/", DisplayBusinessContacts);

router.get("businesscontacts", DisplayBusinessContacts);
//Display an interface to edit the DB

export default router;
