// IMPORTS -
import React from "react";
import OrderTable from "./OrderTable";
import "../../styles/Orders.css";
import MetaData from "../layout/MetaData";

const Orders = () => {
  return (
    <>
      <MetaData title="Orders" />
      <div className="container-fluid order__wrapper">
        <div className="row order__row__wrapper">
          <div className="col-md order__col__wrapper">
            <OrderTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
