// IMPORTS -
import React from "react";
import "../../styles/Menu.css";
import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import burgerOne from "../../assets/burger-1.png";

const Menu = () => {
  const addToCartHandler = () => {};

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
              price={200}
              title="Cheese Burger"
              handler={addToCartHandler}
              delay={0.1}
            />

            <MenuCard
              itemNum={1}
              burgerSrc={burgerOne}
              price={350}
              title="Veg Cheese Burger"
              handler={addToCartHandler}
              delay={0.2}
            />

            <MenuCard
              itemNum={1}
              burgerSrc={burgerOne}
              price={600}
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
