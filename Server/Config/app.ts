//installed 3rd party packages and node modules
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

//modules for authentication
import session from "express-session";
import passport from "passport";
import passportLocal from "passport-local";

//authentication objects
let localStrategy = passportLocal.Strategy; // alias

//database setup
import mongoose, { connection } from "mongoose";
import { DB } from "./db.js";

//point mongoose to the DB URI
export const businessContactConnection = mongoose.connect(DB.businesscontacts, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const userConnection = mongoose.createConnection(DB.users, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//display console messages to identify connection
let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error: ..."));
mongoDB.once("open", () => {
  for (const connection of mongoose.connections) {
    console.log(
      `Connected to MongoDB at: ${connection.host} and DB: ${connection.name}`
    );
  }
});

//routes for main top level site
import indexRouter from "../Routes/index.js";

//routes for business contact db
import contactsRouter from "../Routes/contact.js";

//instantiates an express object
let app = express();

// view engine setup
//shows the express application where to find views (different pages use differnet view templates )
app.set("views", path.join(__dirname, "../Views"));

//the type of view engine we setup was express -e
//this allows us to use the ejs templating syntax
app.set("view engine", "ejs");

//here we activate the logger to keep track of the dev system
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//this static route allows us to reference content generally without having to create a specific route
app.use(express.static(path.join(__dirname, "../../Client")));
app.use(express.static(path.join(__dirname, "../../node_modules")));

app.use("/", indexRouter);

//define area to include buiness contacts
app.use("/businesscontacts", contactsRouter);

// catch 404 and forward to error handler
app.use(function (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  next(createError(404));
});

// error handler
app.use(function (
  err: createError.HttpError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "Error" });
});

//defaults the express application and all its configurations
export default app;
