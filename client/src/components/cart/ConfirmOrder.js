// IMPORTS -
import React, { useEffect, useState } from "react";
import "../../styles/ConfirmOrder.css";
import { Radio, RadioGroup, Button } from "@chakra-ui/react";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/actions/order";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const {
    orderItems,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
    shippingInfo,
  } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => state.Order);
  const navigate = useNavigate();

  const paymentHandler = (e) => {
    e.preventDefault();

    if (paymentMethod === "COD") {
      dispatch(
        createOrder(
          shippingInfo,
          orderItems,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingCharges,
          totalAmount
        )
      );
    } else {
      JSON.stringify(localStorage.setItem("paymentMethod", paymentMethod));
      navigate("/payment/process");
    }
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({
        type: "CLEAR_MESSAGE",
      });
      dispatch({
        type: "EMPTY_STATE",
      });
      navigate("/paymentsuccess");
    }

    if (error) {
      toast.error(error);
      dispatch({
        type: "CLEAR_ERROR",
      });
    }
  }, [message, dispatch, error, navigate]);

  return (
    <>
      <MetaData title="Confirm Order" />
      <div className="container-fluid confirmOrder__wrapper">
        <div className="row confirmOrder__row__wrapper">
          <div className="confirmOrder__heading">
            <h3>Confirm Order</h3>
          </div>

          <div className="col-md confirmOrder__column__wrapper">
            <form
              className="shipping__form__selection"
              onSubmit={paymentHandler}
            >
              <RadioGroup defaultValue="2" className="shipping__form__select">
                <Radio
                  colorScheme="facebook"
                  value="COD"
                  onChange={() => setPaymentMethod("COD")}
                >
                  Cash on delivery
                </Radio>
                <Radio
                  colorScheme="facebook"
                  value="Online"
                  onChange={() => setPaymentMethod("Online")}
                >
                  Online
                </Radio>
              </RadioGroup>

              <div className="shipping__form__btn">
                {paymentMethod ? (
                  <Button colorScheme="blue" type="submit" isDisabled={false}>
                    Place order
                  </Button>
                ) : (
                  <Button colorScheme="blue" type="submit" isDisabled={true}>
                    Place order
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
