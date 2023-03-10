// GENERALS -
const asyncErr = require("../middlewares/asyncFunc");
const User = require("../models/userModel");
const Order = require("../models/orderModel");
// PROFILE -
exports.myProfile = (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

// LOGOUT -
exports.logout = (req, res, next) => {
  // req.session.destroy((err) => {
  //   if (err) return next(err);
  //   res.clearCookie("session.sig", {
  //     secure: process.env.NODE_ENV === "development" ? false : true,
  //     httpOnly: process.env.NODE_ENV === "development" ? false : true,
  //     sameSite: process.env.NODE_ENV === "development" ? false : "none",
  //   });

  //   res.status(200).json({
  //     message: "Logged Out",
  //   });
  // });

  req.session = null;
  res.clearCookie("session.sig", {
    secure: process.env.NODE_ENV === "development" ? false : true,
    httpOnly: process.env.NODE_ENV === "development" ? false : true,
    sameSite: process.env.NODE_ENV === "development" ? false : "none",
  });

  res.status(200).json({
    message: "Logged Out",
  });
};

// GET ALL USERS FOR ADMIN -
exports.getAdminUsers = asyncErr(async (req, res, next) => {
  const users = await User.find({});

  res.status(200).json({
    success: true,
    users,
  });
});

// GET ADMIN STATS -
exports.getAdminStats = asyncErr(async (req, res, next) => {
  const user__count = await User.countDocuments();
  const order__count = await Order.find({});
  const preparing__orders = order__count.filter(
    (item) => item.orderStatus === "Preparing"
  );
  const shipped__orders = order__count.filter(
    (item) => item.orderStatus === "Shipped"
  );
  const delivered__orders = order__count.filter(
    (item) => item.orderStatus === "Delivered"
  );

  let totalIncome = 0;

  order__count.forEach((i) => {
    totalIncome += i.totalAmount;
  });

  res.status(200).json({
    success: true,
    user__count,
    order__count: {
      total: order__count.length,
      preparing: preparing__orders.length,
      shipped: shipped__orders.length,
      delivered: delivered__orders.length,
    },
    totalIncome,
  });
});
