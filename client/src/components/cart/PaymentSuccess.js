// IMPORTS -
import React from 'react';
import "../../styles/PaymentSuccess.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const PaymentSuccess = () => {
  return (
    <>
      <div className="container-fluid success__wrapper">
        <div className="row success__row">
          <div className="col-md success__col">
            <div className="success__heading">
              <h3>Order confirmed</h3>
            </div>

            <div className="success__info">
              <p>
                Order placed successfully, please check the order status by
                clicking on the button below.
              </p>
            </div>

            <div className="success__orders">
              <Button colorScheme="blue"><Link to="/myOrders">Check status</Link></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentSuccess;