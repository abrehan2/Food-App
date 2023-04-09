// GENERALS -
const ErrorHandler = require("../utils/errorHandle");

// ERROR MIDDLEWARE -
exports.errMiddleware = (err, req, res, next) => {
  
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // WRONG MONGO ID ERROR -
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // MONGOOSE DUPLICATE KEY ERROR -
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
