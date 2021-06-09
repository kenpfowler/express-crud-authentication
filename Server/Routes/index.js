"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const index_js_1 = require("../Controllers/index.js");
router.get("/", index_js_1.DisplayHomePage);
router.get("/home", index_js_1.DisplayHomePage);
router.get("/about", index_js_1.DisplayAboutPage);
router.get("/services", index_js_1.DisplayServicesPage);
router.get("/projects", index_js_1.DisplayProjectsPage);
router.get("/contact", index_js_1.DisplayContactPage);
router.get("/login", index_js_1.DisplayLoginPage);
exports.default = router;
//# sourceMappingURL=index.js.map