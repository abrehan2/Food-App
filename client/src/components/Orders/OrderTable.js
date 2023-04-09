// IMPORTS -
import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../redux/actions/order";
import { toast } from "react-hot-toast";
import Loader from "../layout/Loader";

const OrderTable = () => {
  const dispatch = useDispatch();
  const { orders, error, loading } = useSelector((state) => state.MyOrders);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "CLEAR_ERROR",
      });
    }

    dispatch(getMyOrders());
  }, [dispatch, error]);

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

  const data = [];

  orders &&
    orders.map((item, idx) => {
      console.log(item);
      return data.push({
        id: item?._id,
        status: item?.orderStatus,
        qty:
          item?.orderItems.burgerWithFries.quantity +
          item?.orderItems.cheeseBurger.quantity +
          item?.orderItems.vegCheeseBurger.quantity,
        amount: item?.totalAmount,
        payment: item?.paymentMethod,
        action: (
          <Link to={`/order/${item?._id}`}>
            <i class="fas fa-eye"></i>
          </Link>
        ),
      });
    });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <DataTable columns={columns} data={data} responsive={true} />
      )}
    </>
  );
};

export default OrderTable;
