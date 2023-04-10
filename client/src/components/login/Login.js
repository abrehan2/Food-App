// IMPORTS -
import React from "react";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "../../styles/Login.css";
import MetaData from "../layout/MetaData";
import { server } from "../../redux/store";

const Login = () => {
  const loginHandler = () => {
    window.open(`http://localhost:4000/foodApp/google/auth`, "_self");
  };

  return (
    <>
      <MetaData title="Login" />
      <div className="container-fluid login__wrapper">
        <div className="row login__wrapper__row">
          <div className="col-md login__wrapper__col">
            <motion.div
              className="login__btn"
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button colorScheme="blue" onClick={loginHandler}>
                Login with Google
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
