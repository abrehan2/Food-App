// IMPORTS -
import { createReducer } from "@reduxjs/toolkit";

// CART REDUCER -
const cartAction = {
  orderItems: {
    cheeseBurger: {
      quantity: 0,
      price: 350,
    },

    vegCheeseBurger: {
      quantity: 0,
      price: 150,
    },

    burgerWithFries: {
      quantity: 0,
      price: 500,
    },
  },

  itemsPrice: 0,
  taxPrice: 0,
  shippingCharges: 200,
  totalAmount: 200,
  shippingInfo: {},
};

export const cartReducer = createReducer(cartAction, {
  CHEESE_BURGER_INC: (state) => {
    state.orderItems.cheeseBurger.quantity += 1;
  },

  VEG_CHEESE_BURGER_INC: (state) => {
    state.orderItems.vegCheeseBurger.quantity += 1;
  },

  BURGER_WITH_FRIES_INC: (state) => {
    state.orderItems.burgerWithFries.quantity += 1;
  },

  CHEESE_BURGER_DEC: (state) => {
    state.orderItems.cheeseBurger.quantity -= 1;
  },

  VEG_CHEESE_BURGER_DEC: (state) => {
    state.orderItems.vegCheeseBurger.quantity -= 1;
  },

  BURGER_WITH_FRIES_DEC: (state) => {
    state.orderItems.burgerWithFries.quantity -= 1;
  },

  CALCULATE_PRICE: (state) => {
    state.itemsPrice =
      state.orderItems.cheeseBurger.price *
        state.orderItems.cheeseBurger.quantity +
      state.orderItems.vegCheeseBurger.price *
        state.orderItems.vegCheeseBurger.quantity +
      state.orderItems.burgerWithFries.price *
        state.orderItems.burgerWithFries.quantity;
    state.taxPrice = state.itemsPrice * 0.18;
    state.shippingCharges = state.itemsPrice > 1000 ? 0 : 200;
    state.totalAmount =
      state.itemsPrice + state.taxPrice + state.shippingCharges;
  },

  EMPTY_STATE: (state) => {
    state.orderItems = {
      cheeseBurger: {
        quantity: 0,
        price: 200,
      },

      vegCheeseBurger: {
        quantity: 0,
        price: 350,
      },

      burgerWithFries: {
        quantity: 0,
        price: 600,
      },
    };

    state.itemsPrice = 0;
    state.taxPrice = 0;
    state.totalAmount = 0;
    state.shippingCharges = 0;
  },

  ADD_SHIP_INFO: (state, action) => {
    state.shippingInfo = {
      houseNo: action.payload.houseNo,
      city: action.payload.city,
      country: action.payload.country,
      state: action.payload.state,
      phoneNo: action.payload.phoneNo,
      pinCode: action.payload.pinCode,
    };
  },
});

// ORDER REDUCER -
const orderState = {
  loading: null,
  message: null,
  error: null,
};

export const orderReducer = createReducer(orderState, {
  CREATE_ORDER_REQUEST: (state) => {
    state.loading = true;
  },

  CREATE_ORDER_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },

  CREATE_ORDER_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  CLEAR_MESSAGE: (state) => {
    state.message = null;
  },

  CLEAR_ERROR: (state) => {
    state.error = null;
  },
});
