import { check } from "express-validator";

export const RegistrationValidators = [
  check("firstName")
    .trim()
    .isLength({ min: 2 })
    .escape()
    .withMessage("First name must be at least 2 letters long"),
  check("lastName")
    .trim()
    .isLength({ min: 2 })
    .escape()
    .withMessage("Last name must be at least 2 letters long"),
  check("email")
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage("A valid email address is requried"),
  check("username")
    .trim()
    .isLength({ min: 6 })
    .escape()
    .withMessage("Username must be at minimum 6 letters long"),
  check("password")
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage(
      "Password is weak: Must be 8 characters long and contain: 1 number, 1 lowercase letter, 1 uppercase letter, and 1 symbol (!, @, # ect...)"
    ),
];

export const ContactValidators = [
  check("name")
    .trim()
    .isLength({ min: 2 })
    .escape()
    .withMessage("Name must be at least 2 letters long"),
  check("email")
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage("A valid email address is requried"),
  check("phone").trim().escape(),
];
