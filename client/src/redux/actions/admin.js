// IMPORTS -
import axios from "axios";
import { server } from "../store";

// GET ADMIN STATS
export const getAdminStats = () => async (dispatch) => {
  try {
    dispatch({
      type: "GETS_STATS_REQUEST",
    });

    const { data } = await axios.get(`${server}/admin/stats`, {
      withCredentials: true,
    });

    dispatch({
      type: "GETS_STATS_SUCCESS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "GETS_STATS_FAIL",
      payload: err.response.data.message,
    });
  }
};

// GET ADMIN USERS
export const getAdminUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "GETS_ADMIN_USERS_REQUEST",
    });

    const { data } = await axios.get(`${server}/admin/users`, {
      withCredentials: true,
    });

    dispatch({
      type: "GETS_ADMIN_USERS_SUCCESS",
      payload: data.users,
    });
  } catch (err) {
    dispatch({
      type: "GETS_ADMIN_USERS_FAIL",
      payload: err.response.data.message,
    });
  }
};

// GET ADMIN ORDERS
export const getAdminOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: "GETS_ADMIN_ORDERS_REQUEST",
    });

    const { data } = await axios.get(`${server}/admin/orders`, {
      withCredentials: true,
    });

    dispatch({
      type: "GETS_ADMIN_ORDERS_SUCCESS",
      payload: data.orders,
    });
  } catch (err) {
    dispatch({
      type: "GETS_ADMIN_ORDERS_FAIL",
      payload: err.response.data.message,
    });
  }
};

// ADMIN PROCESS REQUEST
export const getProcessRequest = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GETS_PROCESS_REQUEST",
    });

    const { data } = await axios.get(`${server}/admin/order/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "GETS_PROCESS_SUCCESS",
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: "GETS_PROCESS_FAIL",
      payload: err.response.data.message,
    });
  }
};
