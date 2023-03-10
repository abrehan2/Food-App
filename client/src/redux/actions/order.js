// IMPORTS -
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
