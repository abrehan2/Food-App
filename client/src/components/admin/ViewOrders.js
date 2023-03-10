// IMPORTS -
import React from "react";
import "../../styles/ViewOrders.css";
import MetaData from "../layout/MetaData";
import OrdersTable from "./OrdersTable";

const ViewOrders = () => {
  return (
    <>
      <MetaData title="Orders" />
      <div className="container-fluid view__wrapper">
        <div className="row view__wrapper__row">
          <div className="col-md view__wrapper__col">
            <OrdersTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOrders;
