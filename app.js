//installed 3rd party packages
let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

//routes for main top level site
let indexRouter = require("./routes/index");

//route for any users
let usersRouter = require("./routes/users");

//instantiates an express object
let app = express();

// view engine setup

//shows the express application where to find views (different pages use differnet view templates )
app.set("views", path.join(__dirname, "views"));
//the type of view engine we setup was express -e
//this allows us to use the ejs templating syntax
app.set("view engine", "ejs");

//here we activate the logger to keep track of the dev system
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//this static route allows us to reference content generally without having to create a specific route
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
