// IMPORTS -
import { useEffect } from "react";
import webFont from "webfontloader";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Contact from "./components/Contact/Contact";
import Cart from "./components/cart/Cart";
import "./styles/App.css";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Login";
import Profile from "./components/Profile/Profile";
import Orders from "./components/Orders/Orders";
import OrderDetails from "./components/Orders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import ViewOrders from "./components/admin/ViewOrders";
import About from "./components/about/About";
import NotFound from "./components/layout/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user";
import toast, { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import PayOnline from "./components/cart/PayOnline";

const App = () => {
  const dispatch = useDispatch();
  const { isAuth, err, message, user } = useSelector(
    (state) => state.authenticate
  );

  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Poppins"],
      },
    });

    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (err) {
      toast.error(err);
      dispatch({
        type: "CLEAR_ERRORS",
      });
    }

    if (message) {
      toast.success(message);
      dispatch({
        type: "CLEAR_MESSAGE",
      });
    }
  }, [dispatch, err, message]);

  return (
    <>
      <Header isAuth={isAuth} />
      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route
          path="/me"
          element={
            <ProtectedRoute>
              {" "}
              <Profile />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/shipping"
          element={
            <ProtectedRoute>
              {" "}
              <Shipping />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/confirmOrder"
          element={
            <ProtectedRoute>
              {" "}
              <ConfirmOrder />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/myOrders"
          element={
            <ProtectedRoute>
              {" "}
              <Orders />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/order/:id"
          element={
            <ProtectedRoute>
              {" "}
              <OrderDetails />{" "}
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment/process"
          element={
            <ProtectedRoute>
              {" "}
              <PayOnline />{" "}
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        <Route path="/login" element={<Login />} />

        {/* ADMIN ROUTES */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute isAdmin={user?.role}>
              {" "}
              <Dashboard />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute isAdmin={user?.role}>
              {" "}
              <Users />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute isAdmin={user?.role}>
              {" "}
              <ViewOrders />{" "}
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
