import express from "express";
import { DisplayBusinessContacts } from "../Controllers/contact";
const router = express.Router();

//GET businesscontacts page
router.get("/", DisplayBusinessContacts);

router.get("businesscontacts", DisplayBusinessContacts);
//Display an interface to edit the DB

export default router;
