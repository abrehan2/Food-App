// IMPORTS -
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: null,
  isAuth: null,
  user: null,
  err: null,
  message: null,
};

export const authReducer = createReducer(initialState, {
  LOAD_USER_REQUEST: (state) => {
    state.loading = true;
  },

  LOAD_USER_SUCCESS: (state, action) => {
    state.loading = false;
    state.isAuth = true;
    state.user = action.payload;
  },

  LOAD_USER_FAIL: (state, action) => {
    state.loading = false;
    state.isAuth = false;
    state.err = action.payload;
  },

  LOGOUT_USER_REQUEST: (state) => {
    state.loading = true;
  },

  LOGOUT_USER_SUCCESS: (state, action) => {
    state.loading = false;
    state.isAuth = false;
    state.user = null;
    state.message = action.payload;
  },

  LOGOUT_USER_FAIL: (state, action) => {
    state.loading = false;
    state.isAuth = true;
    state.err = action.payload;
  },

  CLEAR_ERRORS: (state) => {
    state.err = null;
  },

  CLEAR_MESSAGE: (state) => {
    state.message = null;
  },
});

// CONTACT ME -

const contactState = {
  loading: null,
  err: null,
  message: null,
};

export const contactReducer = createReducer(contactState, {
  CONTACT_USER_REQUEST: (state) => {
    state.loading = true;
  },

  CONTACT_USER_SUCCESS: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },

  CONTACT_USER_FAIL: (state, action) => {
    state.loading = false;
    state.err = action.payload;
  },

  CLEAR_ERRORS: (state) => {
    state.err = null;
  },

  CLEAR_MESSAGE: (state) => {
    state.message = null;
  },
});
