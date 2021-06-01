import express from "express";
let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Home",
    page: "home",
  });
});

/* GET home page if user types home */
router.get("/home", function (req, res, next) {
  res.render("index", {
    title: "Home",
    page: "home",
  });
});

/* GET About page. */
router.get("/about", function (req, res, next) {
  res.render("index", {
    title: "About",
    page: "about",
  });
});

/* GET Services page. */
router.get("/services", function (req, res, next) {
  res.render("index", {
    title: "Services",
    page: "services",
  });
});

/* GET Projects page. */
router.get("/projects", function (req, res, next) {
  res.render("index", {
    title: "Projects",
    page: "projects",
  });
});

/* GET Contact Us page. */
router.get("/contact", function (req, res, next) {
  res.render("index", {
    title: "Contact",
    page: "contact",
  });
});

module.exports = router;
