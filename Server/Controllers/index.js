"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUser = exports.DisplayRegisterPage = exports.DisplayLoginPage = exports.DisplayContactPage = exports.DisplayProjectsPage = exports.DisplayServicesPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const user_1 = __importDefault(require("../Models/user"));
function DisplayHomePage(req, res, next) {
    if (req.session.isNew) {
        req.session.visitCount = 0;
    }
    req.session.visitCount += 1;
    console.log(`Number of sessions: ${req.session.visitCount}`);
    res.render("index", {
        title: "Home",
        page: "home",
    });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render("index", {
        title: "About",
        page: "about",
    });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayServicesPage(req, res, next) {
    res.render("index", {
        title: "Services",
        page: "services",
    });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayProjectsPage(req, res, next) {
    res.render("index", {
        title: "Projects",
        page: "projects",
    });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayContactPage(req, res, next) {
    res.render("index", {
        title: "Contact",
        page: "contact",
    });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayLoginPage(req, res, next) {
    res.render("index", {
        title: "Login",
        page: "login",
    });
}
exports.DisplayLoginPage = DisplayLoginPage;
function DisplayRegisterPage(req, res, next) {
    res.render("index", {
        title: "Register",
        page: "register",
    });
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function RegisterUser(req, res, next) {
    let newUser = new user_1.default({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password,
    });
    user_1.default.create(newUser, (err, userModel) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        else {
            res.redirect("/businesscontacts");
        }
    });
}
exports.RegisterUser = RegisterUser;
//# sourceMappingURL=index.js.map