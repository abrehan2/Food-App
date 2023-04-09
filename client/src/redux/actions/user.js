// IMPORTS -
import axios from "axios";
import { server } from "../store";

// LOGIN
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_USER_REQUEST",
    });

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    dispatch({
      type: "LOAD_USER_SUCCESS",
      payload: data.user,
    });
  } catch (err) {
    dispatch({
      type: "LOAD_USER_FAIL",
      payload: err.response.data.message,
    });
  }
};

// LOGOUT
export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_USER_REQUEST",
    });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });

    dispatch({
      type: "LOGOUT_USER_SUCCESS",
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: "LOGOUT_USER_FAIL",
      payload: err.response.data.message,
    });
  }
};

// CONTACT ME -
export const ContactUs = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: "CONTACT_USER_REQUEST",
    });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`${server}/contactMe`, formData, config);

    dispatch({
      type: "CONTACT_USER_SUCCESS",
      payload: data.message,
    });
  } catch (err) {
    dispatch({
      type: "CONTACT_USER_FAIL",
      payload: err.response.data.message,
    });
  }
};
