// IMPORTS -
import { createReducer } from "@reduxjs/toolkit";

const adminAction = {
  loading: null,
  user__count: null,
  order__count: null,
  totalIncome: null,
  error: null,
  users: null,
  orders: null,
  message: null,
};

export const adminReducer = createReducer(adminAction, {
  GETS_STATS_REQUEST: (state) => {
    state.loading = true;
  },

  GETS_STATS_SUCCESS: (state, action) => {
    state.loading = false;
    state.user__count = action.payload.user__count;
    state.order__count = action.payload.order__count;
    state.totalIncome = action.payload.totalIncome;
  },

  GETS_STATS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GETS_ADMIN_USERS_REQUEST: (state) => {
    state.loading = true;
  },

  GETS_ADMIN_USERS_SUCCESS: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },

  GETS_ADMIN_USERS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GETS_ADMIN_ORDERS_REQUEST: (state) => {
    state.loading = true;
  },

  GETS_ADMIN_ORDERS_SUCCESS: (state, action) => {
    state.loading = false;
    state.orders = action.payload;
  },

  GETS_ADMIN_ORDERS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GETS_PROCESS_REQUEST: (state) => {
    state.loading = true;
  },

  GETS_PROCESS_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },

  GETS_PROCESS_FAIL: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  CLEAR_ERRORS: (state) => {
    state.error = null;
  },

  CLEAR_MESSAGE: (state) => {
    state.message = null;
  },
});
