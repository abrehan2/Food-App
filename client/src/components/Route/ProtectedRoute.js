// IMPORTS -
import React from "react";
import Loader from "../layout/Loader";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, isAdmin }) => {
  const history = useNavigate();

  const { isAuth, user, loading } = useSelector((state) => state.authenticate);

  // if (loading === true) {
  //   return <Loader />;
  // }

  if (isAuth === false && loading !== true) {
    history("/login");
  }

  if (isAdmin === true && user.role !== "admin") {
    history("/login");
  }
  return children;
};

export default ProtectedRoute;
