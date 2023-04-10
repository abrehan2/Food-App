// IMPORTS -
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";
import { authReducer, contactReducer } from "./reducers/userReducer";
import { myOrders, orderReducer } from "./reducers/orderReducer";
import { adminReducer } from "./reducers/adminReducer";

const store = configureStore({
  reducer: {
    authenticate: authReducer,
    Cart: cartReducer,
    Order: orderReducer,
    MyOrders: myOrders,
    admin: adminReducer,
    contactUs: contactReducer,
  },
});

export const server = `http://food-5n8cprw2e-abrehan2.vercel.app/foodApp`;
export default store;
