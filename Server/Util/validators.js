"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactValidators = exports.RegistrationValidators = void 0;
const express_validator_1 = require("express-validator");
exports.RegistrationValidators = [
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
];
exports.ContactValidators = [
    express_validator_1.check("name")
        .trim()
        .isLength({ min: 2 })
        .escape()
        .withMessage("Name must be at least 2 letters long"),
    express_validator_1.check("email")
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage("A valid email address is requried"),
    express_validator_1.check("phone").trim().escape(),
];
//# sourceMappingURL=validators.js.map