"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContact = exports.EditContact = exports.DisplayEditPage = exports.DisplayBusinessContacts = exports.AddContact = exports.DisplayAddPage = void 0;
const contact_js_1 = __importDefault(require("../Models/contact.js"));
function DisplayAddPage(req, res, next) {
    res.render("add", { title: "Add Contact" });
}
exports.DisplayAddPage = DisplayAddPage;
function AddContact(req, res, next) {
    let newContact = new contact_js_1.default({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
    });
    contact_js_1.default.create(newContact, (err, ContactModel) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        else {
            res.redirect("/businesscontacts");
        }
    });
}
exports.AddContact = AddContact;
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
function EditContact(req, res, next) {
    let id = req.params.id;
    let updatedContact = new contact_js_1.default({
        _id: id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
    });
    contact_js_1.default.updateOne({ _id: id }, updatedContact, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect("/businesscontacts");
    });
}
exports.EditContact = EditContact;
function DeleteContact(req, res, next) {
    let id = req.params.id;
    contact_js_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect("/businesscontacts");
    });
}
exports.DeleteContact = DeleteContact;
//# sourceMappingURL=contact.js.map