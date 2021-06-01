"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
router.get("/", function (req, res, next) {
    res.render("index", {
        title: "Home",
        page: "home",
    });
});
router.get("/home", function (req, res, next) {
    res.render("index", {
        title: "Home",
        page: "home",
    });
});
router.get("/about", function (req, res, next) {
    res.render("index", {
        title: "About",
        page: "about",
    });
});
router.get("/services", function (req, res, next) {
    res.render("index", {
        title: "Services",
        page: "services",
    });
});
router.get("/projects", function (req, res, next) {
    res.render("index", {
        title: "Projects",
        page: "projects",
    });
});
router.get("/contact", function (req, res, next) {
    res.render("index", {
        title: "Contact",
        page: "contact",
    });
});
module.exports = router;
//# sourceMappingURL=index.js.map