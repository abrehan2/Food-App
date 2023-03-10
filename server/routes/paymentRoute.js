const express = require("express");
const { processPayment, sendApiKey } = require("../controllers/payment");
const { isAuth } = require("../middlewares/auth");
const router = express.Router();

router.route("/payment/process").post(isAuth, processPayment);
router.route("/stripeApiKey").get(isAuth, sendApiKey);


module.exports = router;