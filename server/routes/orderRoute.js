// GENERALS -
const express = require("express");
const {
  createOrder,
  createOrderOnline,
  getAdminOrders,
  getOrderDetails,
  getOrders,
  processOrder,
} = require("../controllers/order");
const { authRole, isAuth } = require("../middlewares/auth");
const router = express.Router();

// ROUTES -
router.post("/createOrder", isAuth, createOrder);
router.get("/myOrders", isAuth, getOrders);
router.get("/order/:id", isAuth, getOrderDetails);
router.post("/createOrderOnline", isAuth, createOrderOnline);

// ADMIN ROUTES -
router.get("/admin/orders", isAuth, authRole, getAdminOrders);
router.get("/admin/order/:id", isAuth, authRole, processOrder);

module.exports = router;
