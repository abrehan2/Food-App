// IMPORTS -
import axios from "axios";
import { server } from "../store";

// CREATE ORDER -
export const createOrder =
  (
    shippingInfo,
    orderItems,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "CREATE_ORDER_REQUEST",
      });

      const { data } = await axios.post(
        `${server}/createOrder`,
        {
          shippingInfo,
          orderItems,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingCharges,
          totalAmount,
        },
        {
          withCredentials: true,
        }
      );

      console.log(data);
      dispatch({
        type: "CREATE_ORDER_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "CREATE_ORDER_FAIL",
        payload: error.response.data.message,
      });
    }
  };

// GET MY ORDERS -
export const getMyOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_ORDERS_REQUEST",
    });

    const { data } = await axios.get(`${server}/myOrders`, {
      withCredentials: true,
    });

    dispatch({
      type: "GET_ORDERS_SUCCESS",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "GET_ORDERS_FAIL",
      payload: error.response.data.message,
    });
  }
};

// GET ORDER DETAILS -
export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_DETAIL_REQUEST",
    });

    const { data } = await axios.get(`${server}/order/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "GET_DETAIL_SUCCESS",
      payload: data.order,
    });
  } catch (error) {
    dispatch({
      type: "GET_DETAIL_FAIL",
      payload: error.response.data.message,
    });
  }
};
