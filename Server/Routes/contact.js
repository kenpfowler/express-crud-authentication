"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const contact_1 = require("../Controllers/contact");
router.get("/add", contact_1.DisplayAddPage);
router.post("/add", contact_1.AddContact);
router.get("/", contact_1.DisplayBusinessContacts);
router.get("businesscontacts", contact_1.DisplayBusinessContacts);
router.get("/edit/:id", contact_1.DisplayEditPage);
router.post("/edit/:id", contact_1.EditContact);
router.get("/delete/:id", contact_1.DeleteContact);
exports.default = router;
//# sourceMappingURL=contact.js.map