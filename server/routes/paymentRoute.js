const express = require("express");
const { processPayment, braintreeToken } = require("../controllers/payment");
const { isAuth } = require("../middlewares/auth");
const router = express.Router();

router.route("/payment/process").post(isAuth, processPayment);
router.route("/braintree/token").get(braintreeToken);

module.exports = router;
