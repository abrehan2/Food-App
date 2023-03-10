// IMPORTS -
import React from "react";
import "../../styles/cartItem.css";
import { Button, Input } from "@chakra-ui/react";

const CartItem = ({ value, title, img, increment, decrement }) => {
  return (
    <>
      <section className="container-fluid cart__item__wrapper">
        <div className="row item__row__wrapper">
          <div className="col-lg item__col__wrapper">
            <div className="bag__items">
              <h4>{title}</h4>
              <img src={img} alt="img" className="img-fluid" />
            </div>

            <div className="control__items">
              <Button
                type="button"
                variant="solid"
                onClick={decrement}
                className="bg-black text-white"
              >
                <i class="fa-solid fa-minus"></i>
              </Button>
              <Input
                type="number"
                value={value}
                readOnly
                className="input__item__value"
              />
              <Button
                type="button"
                onClick={increment}
                variant="solid"
                className="bg-black text-white"
              >
                <i class="fa-solid fa-plus"></i>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartItem;
