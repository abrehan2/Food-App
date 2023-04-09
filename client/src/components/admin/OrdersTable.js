// IMPORTS -
import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminOrders, getProcessRequest } from "../../redux/actions/admin";
import { toast } from "react-hot-toast";
import Loader from "../layout/Loader";

const OrdersTable = () => {
  const dispatch = useDispatch();
  const { orders, error, loading, message } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "CLEAR_ERRORS",
      });
    }

    if (message) {
      toast.success(message);
      dispatch({
        type: "CLEAR_MESSAGE",
      });
    }

    dispatch(getAdminOrders());
  }, [dispatch, error, message]);

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

  const processHandler = (order_id) => {
    dispatch(getProcessRequest(order_id));
  };

  const data = [];

  orders &&
    orders.map((item) => {
      return data.push({
        id: item?._id,
        user: item?.user.name,
        status: item?.orderStatus,
        qty:
          item?.orderItems.burgerWithFries.quantity +
          item?.orderItems.cheeseBurger.quantity +
          item?.orderItems.vegCheeseBurger.quantity,
        amount: item?.totalAmount,
        payment: item?.paymentMethod,
        action: (
          <>
            <div
              className="overflow-hidden d-flex gap-3 align-items-center justify-content-center"
              style={{ height: "minContent" }}
            >
              <Link to={`/order/${item?._id}`}>
                <i class="fas fa-eye"></i>
              </Link>

              <Button
                variant="unstyled"
                onClick={() => processHandler(item?._id)}
              >
                <i class="fas fa-check-double"></i>
              </Button>
            </div>
          </>
        ),
      });
    });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md">
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrdersTable;
