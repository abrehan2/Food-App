// IMPORTS -
import React from "react";
import "../../styles/Menu.css";
import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import burgerOne from "../../assets/burger-1.png";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const Menu = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({
          type: "CHEESE_BURGER_INC",
        });
        dispatch({
          type: "CALCULATE_PRICE",
        });
        toast.success("Item added to cart");
        break;

      case 2:
        dispatch({
          type: "VEG_CHEESE_BURGER_INC",
        });
        dispatch({
          type: "CALCULATE_PRICE",
        });
        toast.success("Item added to cart");
        break;

      case 3:
        dispatch({
          type: "BURGER_WITH_FRIES_INC",
        });
        dispatch({
          type: "CALCULATE_PRICE",
        });
        toast.success("Item added to cart");
        break;

      default:
        dispatch({
          type: "CHEESE_BURGER_INC",
        });
        toast.success("Item added to cart");
        break;
    }
  };

  return (
    <>
      <section className="container-fluid menu__wrapper" id="menu">
        <div className="row menu__row__wrapper">
          <div className="menu__heading">
            <motion.h3
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Menu <i class="fas fa-hamburger"></i>
            </motion.h3>
          </div>

          <div className="menu__card col-lg pb-5">
            <MenuCard
              itemNum={1}
              burgerSrc={burgerOne}
              price={350}
              title="Cheese Burger"
              handler={addToCartHandler}
              delay={0.1}
            />

            <MenuCard
              itemNum={2}
              burgerSrc={burgerOne}
              price={150}
              title="Veg Cheese Burger"
              handler={addToCartHandler}
              delay={0.2}
            />

            <MenuCard
              itemNum={3}
              burgerSrc={burgerOne}
              price={500}
              title="Cheese Burger & Fries"
              handler={addToCartHandler}
              delay={0.3}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
