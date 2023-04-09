// IMPORTS -
import React from "react";
import { BounceLoader } from "react-spinners";
import "../../styles/Loader.css";

const Loader = () => {
  return (
    <>
      <div className="container-fluid loader__wrapper">
        <div className="row loader__row">
          <div className="col-md loader__col">
            <BounceLoader color="#f0803c" size={100} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
