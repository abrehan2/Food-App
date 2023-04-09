// GENERALS -
const Order = require("../models/orderModel");
const asyncErr = require("../middlewares/asyncFunc");
const ErrorHandler = require("../utils/errorHandle");

// CREATE ORDER -
exports.createOrder = asyncErr(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
  } = req.body;

  const user = req.user._id;

  const orderOptions = {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    user,
  };

  await Order.create(orderOptions);

  res.status(201).json({
    success: true,
    message: "Order is placed successfully via cash on delivery",
  });
});

// GET ALL ORDERS -
exports.getOrders = asyncErr(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id }).populate(
    "user",
    "name"
  );

  res.status(200).json({
    success: true,
    orders,
  });
});

// GET ORDER DETAILS -
exports.getOrderDetails = asyncErr(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate("user", "name");

  if (!order) return next(new ErrorHandler("Invalid order id", 404));

  res.status(200).json({
    success: true,
    order,
  });
});

// CREATE ORDER ONLINE -
exports.createOrderOnline = asyncErr(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    user,
  } = req.body;

  console.log(
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    user
  );

  const orderOptions = {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    user,
  };

  const order = await Order.create(orderOptions);

  res.status(201).json({
    success: true,
    message: "Order is placed successfully via online",
    orderOptions,
    order,
  });
});

// GET ADMIN ORDERS -
exports.getAdminOrders = asyncErr(async (req, res, next) => {
  const orders = await Order.find({}).populate("user", "name");

  res.status(200).json({
    success: true,
    orders,
  });
});

// ADMIN PROCESS ORDERS -
exports.processOrder = asyncErr(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) return next(new ErrorHandler("Invalid order id", 404));

  if (order.orderStatus === "Preparing") order.orderStatus = "Shipped";
  else if (order.orderStatus === "Shipped") {
    order.orderStatus = "Delivered";
    order.deliveredAt = new Date(Date.now());
  } else if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("Food already delivered", 400));
  }

  await order.save();

  res.status(200).json({
    success: true,
    message: "Status updated successfully",
  });
});
