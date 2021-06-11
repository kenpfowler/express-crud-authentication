"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ContactSchema = new Schema({
    name: String,
    phone: String,
    email: String,
}, {
    collection: "businesscontacts",
    timestamps: true,
});
const ContactModel = mongoose_1.default.model("Contacts", ContactSchema);
exports.default = ContactModel;
//# sourceMappingURL=contact.js.map