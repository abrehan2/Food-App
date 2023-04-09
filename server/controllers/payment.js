const asyncErr = require("express-async-handler");

// IMPLEMENTING BRAINTREE
const brainTree = require("braintree");

const gateway = new brainTree.BraintreeGateway({
  environment: brainTree.Environment.Sandbox,
  merchantId: process.env.MERCHANT_ID,
  publicKey: process.env.PUBLIC_KEY,
  privateKey: process.env.PRIVATE_KEY,
});

exports.processPayment = asyncErr(async (req, res, next) => {
  const { totalAmount, nonce } = req.body;
  const transaction = gateway.transaction.sale(
    {
      amount: totalAmount,
      paymentMethodNonce: nonce,
      options: {
        submitForSettlement: true,
      },
    },
    (error, result) => {
      if (result) {
        res.status(200).json({
          success: true,
        });
      } else {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
    }
  );
});

// BRAINTREE TOKEN
exports.braintreeToken = asyncErr(async (req, res, next) => {
  gateway.clientToken.generate({}, (err, response) => {
    if (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }

    res.status(201).json({
      success: true,
      response,
    });
  });
});
