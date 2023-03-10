// IMPORTS -
import React from "react";
import "../../styles/Home.css";
import headerBg from "../../assets/header-bg.png";
import { motion } from "framer-motion";
import Founder from "./Report";
import Menu from "./Menu";
import MetaData from "../layout/MetaData";

const Home = () => {
  return (
    <>
      <MetaData title="Home" />
      <div className="container-fluid container__wrapper">
        <div className="row row__wrapper">
          <div className="col-lg-5 wrapper__one">
            <div className="app__info">
              <div className="heading">
                <motion.h3
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                >
                  Food App
                </motion.h3>
              </div>
              <div className="heading__info">
                <motion.p
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Bring out the best
                </motion.p>
              </div>

              <div className="heading__button">
                <motion.button
                  type="button"
                  className="btn btn-outline-light"
                  initial={{ y: "-100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <a href="#menu">Explore Menu</a>
                </motion.button>
              </div>
            </div>
          </div>
          <div className="col-lg-7 wrapper__two">
            <motion.img
              src={headerBg}
              alt="header-bg"
              className="img-fluid"
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
            />
          </div>
        </div>
      </div>
      <Founder />
      <Menu />
    </>
  );
};

export default Home;
