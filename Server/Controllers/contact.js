"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayEditPage = exports.DisplayBusinessContacts = void 0;
const contact_js_1 = __importDefault(require("../Models/contact.js"));
function DisplayBusinessContacts(req, res, next) {
    contact_js_1.default.find((err, businesscontacts) => {
        if (err) {
            console.error(err);
        }
        res.render("businesscontacts", {
            title: "Contacts",
            businesscontacts: businesscontacts,
        });
    });
}
exports.DisplayBusinessContacts = DisplayBusinessContacts;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    contact_js_1.default.findById(id, {}, {}, (err, businessContactToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render("edit", { title: "Edit List", item: businessContactToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
//# sourceMappingURL=contact.js.map