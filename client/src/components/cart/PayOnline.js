// IMPORTS -
import React, { useEffect, useState } from "react";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import "../../styles/PayOnline.css";
import MetaData from "../layout/MetaData";
import toast from "react-hot-toast";
import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { server } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

const PayOnline = () => {
  const navigate = useNavigate();
  const { orderItems, itemsPrice, taxPrice, shippingCharges, totalAmount } =
    useSelector((state) => state.Cart);
  const { user, isAuth } = useSelector((state) => state.authenticate);
  const [paymentMethod, setPaymentMethod] = useState(
    localStorage.getItem("paymentMethod")
  );
  const [disableBtn, setDisableBtn] = useState(false);
  const [shippingInfo, setShippingInfo] = useState(
    JSON.parse(localStorage.getItem("shippingInfo"))
  );
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const myOrder = {
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    user: user?._id,
  };

  // GET PAYMENT TOKEN -
  useEffect(() => {
    const get__token = async () => {
      try {
        const { data } = await axios.get(`${server}/braintree/token`);
        data && setClientToken(data?.response.clientToken);
      } catch (err) {
        toast.error(err.message);
      }
    };

    if (isAuth) {
      get__token();
    }
  }, [setClientToken, isAuth]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      const { nonce } = await instance.requestPaymentMethod();
      await axios.post(
        `${server}/payment/process`,
        {
          nonce,
          totalAmount,
        },
        config
      );

      setDisableBtn(true);

      const { data } = await axios.post(
        `${server}/createOrderOnline`,
        myOrder,
        config
      );

      toast.success(data.message);
      navigate("/paymentsuccess");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <MetaData title="Payment" />
      <div className="container-fluid online__wrapper">
        <div className="row online__row">
          <div className="cart__heading">
            <h3>Card Info</h3>
          </div>
          <div className="col-md online__col">
            {clientToken ? (
              <DropIn
                options={{
                  authorization: `${clientToken}`,
                  paypal: {
                    flow: "vault",
                  },
                }}
                onInstance={(instance) => setInstance(instance)}
              />
            ) : (
              <Heading as="h4" size="md">
                Please have patience ...
              </Heading>
            )}

            <div className="online__btn">
              <Button
                colorScheme="blue"
                type="submit"
                onClick={submitHandler}
                isDisabled={!instance || !clientToken || disableBtn}
              >
                Proceed
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayOnline;
