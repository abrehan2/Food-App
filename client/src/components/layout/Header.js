// IMPORTS -
import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/header.css";
import { motion } from "framer-motion";

const Header = ({ isAuth = false }) => {
  return (
    <>
      <div className="container-fluid nav__bar shadow-sm">
        <div className="row nav__wrapper">
          <div className="col-md nav__Set">
            <nav class="navbar navbar-expand-lg p-md-4 p-3 text-white">
              <NavLink class="navbar-brand text-white" to="/">
                <motion.i
                  class="fas fa-utensils fs-2"
                  initial={{ x: "-750%" }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: 0.2 }}
                ></motion.i>
              </NavLink>
              <button
                class="navbar-toggler fs-2 border-0 text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="fas fa-bars"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 fw-medium d-md-flex flex-lg-row gap-md-5 text-center">
                  <li class="nav-item">
                    <NavLink
                      class="nav-link text-white"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>

                  <li class="nav-item">
                    <NavLink
                      class="nav-link text-white"
                      aria-current="page"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      class="nav-link text-white"
                      aria-current="page"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>

                  <li class="nav-item">
                    <NavLink
                      class="nav-link text-white"
                      aria-current="page"
                      to="/cart"
                    >
                      <i class="fas fa-shopping-cart"></i>
                    </NavLink>
                  </li>

                  <li class="nav-item">
                    <NavLink
                      class="nav-link text-white"
                      aria-current="page"
                      to={isAuth ? "/me" : "/login"}
                    >
                      {isAuth ? (
                        <i class="fas fa-user"></i>
                      ) : (
                        <i class="fas fa-sign-in-alt"></i>
                      )}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
