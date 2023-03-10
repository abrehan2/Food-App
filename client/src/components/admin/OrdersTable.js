// IMPORTS -
import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const OrdersTable = () => {
  const columns = [
    {
      name: "Order Id",
      selector: (row) => row.id,
    },

    {
      name: "User",
      selector: (row) => row.user,
    },

    {
      name: "Status",
      selector: (row) => row.status,
    },

    {
      name: "Item Quantity",
      selector: (row) => row.qty,
    },

    {
      name: "Amount",
      selector: (row) => row.amount,
    },

    {
      name: "Payment Method",
      selector: (row) => row.payment,
    },
    {
      name: "Action",
      selector: (row) => row.action,
    },
  ];

  const data = [
    {
      id: 1,
      user: "Rehan",
      status: "Processing",
      qty: "3",
      amount: "5000",
      payment: "COD",
      action: (
        <>
          <div
            className="overflow-hidden d-flex gap-3 align-items-center justify-content-center"
            style={{ height: "minContent" }}
          >
            <Link to="/order/sddfdfdfd">
              <i class="fas fa-eye"></i>
            </Link>

            <Button variant="unstyled">
              <i class="fas fa-check-double"></i>
            </Button>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersTable;
