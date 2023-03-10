const asyncErr = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

exports.processPayment = asyncErr(async (req, res, next) => {
    const myPayment = stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Food App",
    },
  });

  res.status(200).json({
    success: true,
    client_secret: myPayment.client_secret,
  });

});

// SENDING STRIPE API KEY TO FRONTEND
exports.sendApiKey = asyncErr(async (req, res, next) => {
  res.status(200).json({
    success: true,
    stripeApiKey: process.env.STRIPE_PUBLIC_KEY,
  });
});