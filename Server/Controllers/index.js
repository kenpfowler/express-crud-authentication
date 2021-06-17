"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessLogoutPage = exports.ProcessRegisterPage = exports.DisplayRegisterPage = exports.ProcessLoginPage = exports.DisplayLoginPage = exports.DisplayContactPage = exports.DisplayProjectsPage = exports.DisplayServicesPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const user_1 = __importDefault(require("../Models/user"));
const passport_1 = __importDefault(require("passport"));
const express_validator_1 = require("express-validator");
const Util_1 = require("../Util");
function DisplayHomePage(req, res, next) {
    res.render("index", {
        title: "Home",
        page: "home",
        username: Util_1.UserDisplayName(req),
    });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render("index", {
        title: "About",
        page: "about",
        username: Util_1.UserDisplayName(req),
    });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayServicesPage(req, res, next) {
    res.render("index", {
        title: "Services",
        page: "services",
        username: Util_1.UserDisplayName(req),
    });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayProjectsPage(req, res, next) {
    res.render("index", {
        title: "Projects",
        page: "projects",
        username: Util_1.UserDisplayName(req),
    });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayContactPage(req, res, next) {
    res.render("index", {
        title: "Contact",
        page: "contact",
        username: Util_1.UserDisplayName(req),
    });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayLoginPage(req, res, next) {
    if (!req.user) {
        return res.render("index", {
            title: "Login",
            page: "login",
            messages: req.flash("loginMessage"),
            username: Util_1.UserDisplayName(req),
        });
    }
    return res.redirect("/businesscontacts");
}
exports.DisplayLoginPage = DisplayLoginPage;
function ProcessLoginPage(req, res, next) {
    passport_1.default.authenticate("local", function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            req.flash("loginMessage", "Wrong Username and/or Password");
            return res.redirect("/login");
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            return res.redirect("/businesscontacts");
        });
    })(req, res, next);
}
exports.ProcessLoginPage = ProcessLoginPage;
function DisplayRegisterPage(req, res, next) {
    if (!req.user) {
        return res.render("index", {
            title: "Register",
            page: "register",
            messages: req.flash("registerMessage"),
            username: Util_1.UserDisplayName(req),
        });
    }
    return res.redirect("/businesscontacts");
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessRegisterPage(req, res, next) {
    let errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        let errorString = errors.array().map((validationResultObject) => {
            return validationResultObject.msg;
        });
        req.flash("registerMessage", errorString);
        return res.redirect("/register");
    }
    let newUser = new user_1.default({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
    });
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err) {
            console.error(err);
            req.flash("registerMessage", "Registration Error");
            return res.redirect("/register");
        }
        return passport_1.default.authenticate("local")(req, res, () => {
            return res.redirect("/businesscontacts");
        });
    });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLogoutPage(req, res, next) {
    req.logOut();
    res.redirect("/login");
}
exports.ProcessLogoutPage = ProcessLogoutPage;
//# sourceMappingURL=index.js.map