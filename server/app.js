// GENERALS -
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const express = require("express");
const app = express();
const { connectPassport } = require("./utils/strategy");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { errMiddleware } = require("./middlewares/error");
const passport = require("passport");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

// MIDDLEWARE FOR PASSPORT -
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       secure: process.env.NODE_ENV === "development" ? false : true,
//       httpOnly: process.env.NODE_ENV === "development" ? false : true,
//       sameSite: process.env.NODE_ENV === "development" ? false : "none",
//     },
//   })
// );
app.use(cookieSession({
  name: "session",
  keys: ["cyberwolve"],
  maxAge: 24 * 60 * 60 * 100,
}));
// app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// CONNECT PASSPORT -
connectPassport();

app.enable("trust proxy"); // MANDATORY FOR DEPLOYING ON HEROKU

// IMPORTING ROUTES -
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");
const paymentRoute = require("./routes/paymentRoute");

// BASIC MIDDLEWARES -
app.use("/foodApp", userRoute);
app.use("/foodApp", orderRoute);
app.use("/foodApp", paymentRoute);

// ERROR MIDDLEWARE -
app.use(errMiddleware);
module.exports = app;
