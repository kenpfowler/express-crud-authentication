"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContact = exports.EditContact = exports.DisplayEditPage = exports.DisplayBusinessContacts = exports.AddContact = exports.DisplayAddPage = void 0;
const contact_js_1 = __importDefault(require("../Models/contact.js"));
const index_js_1 = require("../Util/index.js");
const express_validator_1 = require("express-validator");
function DisplayAddPage(req, res, next) {
    res.render("add", {
        title: "Add Contact",
        username: index_js_1.UserDisplayName(req),
        messages: req.flash("addMessage"),
    });
}
exports.DisplayAddPage = DisplayAddPage;
function AddContact(req, res, next) {
    let errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        let errorStringArray = errors.array().map((validationResultObject) => {
            return validationResultObject.msg;
        });
        console.error({ ExpressValidatorError: errorStringArray });
        req.flash("addMessage", errorStringArray);
        return res.redirect("add");
    }
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
    contact_js_1.default.find({}, {}, { sort: { name: 1 } }, (err, businesscontacts) => {
        if (err) {
            console.error(err);
        }
        res.render("businesscontacts", {
            title: "Contacts",
            businesscontacts: businesscontacts,
            username: index_js_1.UserDisplayName(req),
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
        res.render("edit", {
            title: "Edit List",
            item: businessContactToEdit,
            username: index_js_1.UserDisplayName(req),
        });
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