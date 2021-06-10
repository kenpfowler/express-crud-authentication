import express from "express";
const router = express.Router();

//import contact controllers
import {
  DisplayBusinessContacts,
  DisplayEditPage,
  DisplayAddPage,
  AddContact,
} from "../Controllers/contact";

//GET route for displaying the ADD page - CREATE Operation
router.get("/add", DisplayAddPage);

//POST route fro processing the ADD page - CREATE Operation
router.post("/add", AddContact);

//GET businesscontacts page - READ operation
router.get("/", DisplayBusinessContacts);

router.get("businesscontacts", DisplayBusinessContacts);

//GET route for displaying the edit page - UPDATE Operation
router.get("/edit/:id", DisplayEditPage);

//POST route for processing the edit page - UPDATE Operation
router.post("/edit/:id", (req, res, next) => {});

//GET route to perform deletion - DELETE Operation
router.get("/delete", (req, res, next) => {});

export default router;
