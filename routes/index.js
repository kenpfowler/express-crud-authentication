var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Home",
  });
});

/* GET home page if user types home */
router.get("/home", function (req, res, next) {
  res.render("index", {
    title: "Home",
  });
});

/* GET About page. */
router.get("/about", function (req, res, next) {
  res.render("index", {
    title: "About",
  });
});

/* GET About page. */
router.get("/services", function (req, res, next) {
  res.render("index", {
    title: "Services",
  });
});

/* GET Projects page. */
router.get("/projects", function (req, res, next) {
  res.render("index", {
    title: "Projects",
  });
});

/* GET About Us page. */
router.get("/aboutus", function (req, res, next) {
  res.render("index", {
    title: "About Us",
  });
});

/* GET Contact Us page. */
router.get("/contact", function (req, res, next) {
  res.render("index", {
    title: "Contact",
  });
});

module.exports = router;
