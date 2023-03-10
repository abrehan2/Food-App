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
  const [disableBtn, setDisableBtn] = useState(false);
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
  useSelector((state) => console.log(state.Order));
  const naviagte = useNavigate();

  const paymentHandler = (e) => {
    e.preventDefault();
    setDisableBtn(true);

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
      naviagte("/paymentsuccess");
    }

    if (error) {
      toast.error(error);
      dispatch({
        type: "CLEAR_ERROR",
      });
      setDisableBtn(false);
    }
  }, [message, dispatch, error, naviagte]);

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
                  value="1"
                  onChange={() => setPaymentMethod("COD")}
                  required
                >
                  Cash on delivery
                </Radio>
                <Radio
                  colorScheme="facebook"
                  value="2"
                  onChange={() => setPaymentMethod("Online")}
                  required
                >
                  Online
                </Radio>
              </RadioGroup>

              <div className="shipping__form__btn">
                <Button
                  colorScheme="blue"
                  type="submit"
                  isDisabled={disableBtn}
                >
                  Place order
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
