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
import { UserDisplayName } from "../Util/index.js";

//modules for cors
import cors from "cors";

//authentication objects
let localStrategy = passportLocal.Strategy; // alias
import User from "../Models/user.js";

//module for auth messaging and error management
import flash from "connect-flash";

//database setup
import mongoose from "mongoose";
import { DB } from "./db.js";

// point mongoose to the DB URI
// export const ContactConnection = mongoose.createConnection(DB.remoteURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect(DB.remoteURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//display console messages to identify connection
let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error: :( "));
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

//add support for cors
app.use(cors());

//setup express session
app.use(
  session({ secret: DB.Secret, saveUninitialized: false, resave: false })
);

//initialze flash
app.use(flash());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//impliment an auth strategy
passport.use(User.createStrategy());

//serialize and deserialze user
//This is like encrypting and decrypting user data
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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
  res.render("error", { title: "Error", username: UserDisplayName(req) });
});

//defaults the express application and all its configurations
export default app;
