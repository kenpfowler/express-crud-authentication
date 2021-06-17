"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
const index_js_1 = require("../Controllers/index.js");
router.get("/", index_js_1.DisplayHomePage);
router.get("/home", index_js_1.DisplayHomePage);
router.get("/about", index_js_1.DisplayAboutPage);
router.get("/services", index_js_1.DisplayServicesPage);
router.get("/projects", index_js_1.DisplayProjectsPage);
router.get("/contact", index_js_1.DisplayContactPage);
router.get("/login", index_js_1.DisplayLoginPage);
router.post("/login", index_js_1.ProcessLoginPage);
router.get("/register", index_js_1.DisplayRegisterPage);
router.post("/register", [
    express_validator_1.check("firstName")
        .trim()
        .isLength({ min: 2 })
        .escape()
        .withMessage("First name must be at least 2 letters long"),
    express_validator_1.check("lastName")
        .trim()
        .isLength({ min: 2 })
        .escape()
        .withMessage("Last name must be at least 2 letters long"),
    express_validator_1.check("email")
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage("A valid email address is requried"),
    express_validator_1.check("username")
        .trim()
        .isLength({ min: 6 })
        .escape()
        .withMessage("Username must be at minimum 6 letters long"),
    express_validator_1.check("password")
        .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
        .withMessage("Password is weak: Must be 8 characters long and contain: 1 number, 1 lowercase letter, 1 uppercase letter, and 1 symbol (!, @, # ect...)"),
], index_js_1.ProcessRegisterPage);
router.get("/logout", index_js_1.ProcessLogoutPage);
exports.default = router;
//# sourceMappingURL=index.js.map