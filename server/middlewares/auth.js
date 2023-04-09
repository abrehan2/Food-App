// GENERALS -
const ErrorHandler = require("../utils/errorHandle");

// CHECKING IF LOGGED IN -
exports.isAuth = (req, res, next) => {
  const token = req.cookies["session.sig"];

  if (token === undefined) {
    return next(new ErrorHandler("Not logged in", 401));
  }

  next();
};

// CHECKING THE ROLES -
exports.authRole = (req, res, next) => {
  if (req.user.role !== "admin") {
    return next(new ErrorHandler("Only admin is allowed", 401));
  }

  next();
};
