// IMPORTS -
import React from "react";
import "../../styles/Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="container-fluid footer__wrapper">
          <div className="row footer__row">
            <motion.div
              className="col-md footer__box"
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="footer__icon">
                <i
                  class="fas fa-utensils fs-2"
                  initial={{ x: "-750%" }}
                  whileInView={{ x: 0 }}
                ></i>
              </div>

              <div className="footer__icon">
                <p>copyright &#169; 2023</p>
              </div>
            </motion.div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
