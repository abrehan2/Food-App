// IMPORTS -
import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const OrderTable = () => {
  const columns = [
    {
      name: "Order Id",
      selector: (row) => row.id,
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
      status: "Processing",
      qty: "3",
      amount: "5000",
      payment: "COD",
      action: (
        <Link to="/order/sddfdfdfd">
          <i class="fas fa-eye"></i>
        </Link>
      ),
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} responsive={true} />
    </>
  );
};

export default OrderTable;
