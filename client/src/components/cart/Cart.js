// IMPORTS -
import React, { useEffect } from "react";
import "../../styles/Cart.css";
import CartItem from "./CartItem";
import burgerImage from "../../assets/burger-1.png";
import { Button, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { orderItems, itemsPrice, taxPrice, shippingCharges, totalAmount } =
    useSelector((state) => state.Cart);
  const { isAuth } = useSelector((state) => state.authenticate);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(orderItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
      })
    );
  }, [orderItems, itemsPrice, taxPrice, shippingCharges, totalAmount]);

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({
          type: "CHEESE_BURGER_INC",
        });
        dispatch({
          type: "CALCULATE_PRICE",
        });
        break;

      case 2:
        dispatch({
          type: "VEG_CHEESE_BURGER_INC",
        });
        dispatch({
          type: "CALCULATE_PRICE",
        });
        break;

      case 3:
        dispatch({
          type: "BURGER_WITH_FRIES_INC",
        });
        dispatch({
          type: "CALCULATE_PRICE",
        });
        break;

      default:
        dispatch({
          type: "CHEESE_BURGER_INC",
        });
        dispatch({
          type: "CALCULATE_PRICE",
        });
        break;
    }
  };

  const decrement = (item) => {
    switch (item) {
      case 1:
        if (orderItems.cheeseBurger.quantity === 0) break;
        dispatch({
          type: "CHEESE_BURGER_DEC",
        });
        dispatch({
          type: "CALCULATE_PRICE",
        });
        break;

      case 2:
        if (orderItems.vegCheeseBurger.quantity === 0) break;
        dispatch({
          type: "VEG_CHEESE_BURGER_DEC",
        });
        dispatch({
          type: "CALCULATE_PRICE",
        });
        break;

      case 3:
        if (orderItems.burgerWithFries.quantity === 0) break;
        dispatch({
          type: "BURGER_WITH_FRIES_DEC",
        });
        dispatch({
          type: "CALCULATE_PRICE",
        });
        break;

      default:
        if (orderItems.cheeseBurger.quantity === 0) break;
        dispatch({
          type: "CHEESE_BURGER_DEC",
        });
        dispatch({
          type: "CALCULATE_PRICE",
        });
        break;
    }
  };

  return (
    <>
      <MetaData title="Cart" />
      <section className="container-fluid cart__wrapper">
        <div className="row cart__row__wrapper">
          <div className="cart__heading">
            <h3>Your Bag</h3>
          </div>

          <div className="col-lg cart__wrapper__col">
            <CartItem
              title={"Cheese Burger"}
              img={burgerImage}
              value={orderItems.cheeseBurger.quantity}
              increment={() => increment(1)}
              decrement={() => decrement(1)}
            />

            <CartItem
              title={"Veg Cheese Burger"}
              img={burgerImage}
              value={orderItems.vegCheeseBurger.quantity}
              increment={() => increment(2)}
              decrement={() => decrement(2)}
            />

            <CartItem
              title={"Burger With Fries"}
              img={burgerImage}
              value={orderItems.burgerWithFries.quantity}
              increment={() => increment(3)}
              decrement={() => decrement(3)}
            />

            <Divider className="border border-dark" />
            <article className="total__billing__price">
              <div>
                <h4>Sub Total</h4>
                <p>-/{itemsPrice}</p>
              </div>
              <Divider
                orientation="vertical"
                className="border border-dark d-lg-block d-none"
              />
              <div>
                <h4>Tax</h4>
                <p>-/{taxPrice}</p>
              </div>
              <Divider
                orientation="vertical"
                className="border border-dark d-lg-block d-none"
              />
              <div>
                <h4>Shipping Charges</h4>
                <p>-/{shippingCharges}</p>
              </div>

              <Divider
                orientation="vertical"
                className="border border-dark d-lg-block d-none"
              />

              <div>
                <h4>Total Charges</h4>
                <p>-/{totalAmount}</p>
              </div>

              <div className="shipping__check">
                <Button
                  type="submit"
                  className="chakra__button px-3"
                  variant="outline"
                  isDisabled={
                    orderItems.cheeseBurger.quantity > 0 ||
                    orderItems.vegCheeseBurger.quantity > 0 ||
                    orderItems.burgerWithFries.quantity > 0
                      ? false
                      : true
                  }
                >
                  <Link to={isAuth ? "/shipping" : "/login"}>Ship Item</Link>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
