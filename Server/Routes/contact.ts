import express from "express";
const router = express.Router();

//import contact controllers
import {
  DisplayBusinessContacts,
  DisplayEditPage,
  DisplayAddPage,
  AddContact,
  EditContact,
  DeleteContact,
} from "../Controllers/contact";

//Import AuthGaurd to prevent users from accessing restricted areas of the application
import { AuthGaurd } from "../Util/index.js";

//GET route for displaying the ADD page - CREATE Operation
router.get("/add", AuthGaurd, DisplayAddPage);

//POST route fro processing the ADD page - CREATE Operation
router.post("/add", AuthGaurd, AddContact);

//GET businesscontacts page - READ operation
router.get("/", AuthGaurd, DisplayBusinessContacts);
router.get("/businesscontacts", AuthGaurd, DisplayBusinessContacts);

//GET route for displaying the edit page - UPDATE Operation
router.get("/edit/:id", AuthGaurd, DisplayEditPage);

//POST route for processing the edit page - UPDATE Operation
router.post("/edit/:id", AuthGaurd, EditContact);

//GET route to perform deletion - DELETE Operation
router.get("/delete/:id", AuthGaurd, DeleteContact);

export default router;
