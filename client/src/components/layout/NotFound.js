// IMPORTS -
import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../../styles/NotFound.css";

const NotFound = () => {
  return (
    <>
      <div className="container-fluid not__wrapper">
        <div className="row not__wrapper__row">
          <div className="col-md not__wrapper__col">
            <div className="error__text overflow-hidden lead fw-semibold fs-1 mb-3">
              Page not found
            </div>

            <div className="goto__btn">
              <Button colorScheme="blue">
                <Link to="/">
                  <i class="fas fa-arrow-left"></i>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
