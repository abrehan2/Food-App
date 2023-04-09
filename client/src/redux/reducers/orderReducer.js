// IMPORTS -
import { createReducer } from "@reduxjs/toolkit";

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

const userOrders = {
  orders: null,
  loading: null,
  error: null,
  order: null,
};

export const myOrders = createReducer(userOrders, {
  GET_ORDERS_REQUEST: (state, action) => {
    state.loading = true;
  },

  GET_ORDERS_SUCCESS: (state, action) => {
    state.loading = false;
    state.orders = action.payload;
  },

  GET_ORDERS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GET_DETAIL_REQUEST: (state, action) => {
    state.loading = true;
  },

  GET_DETAIL_SUCCESS: (state, action) => {
    state.loading = false;
    state.order = action.payload;
  },

  GET_DETAIL_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  CLEAR_ERROR: (state) => {
    state.error = null;
  },
});
