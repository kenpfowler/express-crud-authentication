"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayRegisterPage = exports.DisplayLoginPage = exports.DisplayContactPage = exports.DisplayProjectsPage = exports.DisplayServicesPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
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
//# sourceMappingURL=index.js.map