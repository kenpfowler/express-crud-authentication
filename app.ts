//installed 3rd party packages
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

//routes for main top level site
let indexRouter = require("./routes/index");

//route for any users
let usersRouter = require("./routes/users");
const { Http2ServerRequest } = require("node:http2");
const { Server } = require("node:http");

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
app.use(function (req: any, res: any, next: (arg0: any) => void) {
  next(createError(404));
});

// error handler
app.use(function (
  err: { message: any; status: any },
  req: { app: { get: (arg0: string) => string } },
  res: {
    locals: { message: any; error: any };
    status: (arg0: any) => void;
    render: (arg0: string, arg1: { title: string }) => void;
  },
  next: any
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "Error" });
});

module.exports = app;
