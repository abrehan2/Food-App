// IMPORTS -
import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, orderReducer } from "./reducers/cartReducer";
import { authReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    authenticate: authReducer,
    Cart: cartReducer,
    Order: orderReducer,
  },
});

export const server = `http://localhost:4000/foodApp`;
export default store;
