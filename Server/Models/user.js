"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("../Config/app");
const Schema = mongoose_1.default.Schema;
const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    userName: String,
    password: String,
}, {
    collection: "users",
    timestamps: true,
});
const UserModel = app_1.userConnection.model("User", UserSchema);
exports.default = UserModel;
//# sourceMappingURL=user.js.map