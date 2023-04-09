// GENERALS -
const asyncErr = require("../middlewares/asyncFunc");
const User = require("../models/userModel");
const Order = require("../models/orderModel");
const nodemailer = require("nodemailer");

// PROFILE -
exports.myProfile = (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

// LOGOUT -
exports.logout = (req, res, next) => {
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

// CONTACT -
exports.contactMe = asyncErr(async (req, res, next) => {
  const { name, email, description } = req.body;

  if (!name || !email || !description) {
    res.status(400).json({
      success: false,
      error: "Please fill the fields",
    });
  }

  res.status(200).json({
    success: true,
    message: "Your query has been sent",
  });

  // SENDING EMAIL TO USER -
  const transporter = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: email,
    subject: "Food App real-time reply",
    text: `Dear ${name},\n\nWe appreciate you informing us about your issue, and please rest assured that your satisfaction is our top priority.\n\nRegards,\nAdmin. 
  `,
  };

  await transporter.sendMail(mailOptions);
});

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
