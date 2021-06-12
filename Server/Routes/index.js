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
router.get("/register", index_js_1.DisplayRegisterPage);
router.post("/register", [
    express_validator_1.check("firstName")
        .trim()
        .isLength({ min: 3 })
        .escape()
        .withMessage("A first name is required."),
    express_validator_1.check("lastName")
        .trim()
        .isLength({ min: 3 })
        .escape()
        .withMessage("A last name is required."),
    express_validator_1.check("email")
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage("A valid email address is required."),
    express_validator_1.check("userName")
        .trim()
        .isLength({ min: 3 })
        .escape()
        .withMessage("A username is required."),
    express_validator_1.check("password")
        .trim()
        .escape()
        .isStrongPassword()
        .withMessage("Choose a strong password"),
], index_js_1.RegisterUser);
exports.default = router;
//# sourceMappingURL=index.js.map