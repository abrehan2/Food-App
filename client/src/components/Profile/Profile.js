// IMPORTS -
import React, { useEffect } from "react";
import "../../styles/Profile.css";
import {
  Card,
  CardHeader,
  CardFooter,
  Flex,
  Button,
  Heading,
  Avatar,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/actions/user";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../layout/Loader";

const Profile = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { user, loading, message, err } = useSelector(
    (state) => state.authenticate
  );

  const logoutHandler = () => {
    dispatch(logoutUser());
    history("/");
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({
        type: "CLEAR_MESSAGE",
      });
    }

    if (err) {
      toast.error(err);
      dispatch({
        type: "CLEAR_ERRORS",
      });
    }
  }, [message, dispatch, err]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Profile" />
          <div className="container-fluid profile__wrapper">
            <div className="row profile__wrapper__row">
              <div className="col-md profile__wrapper__col">
                <motion.div
                  className="card__wrapper shadow rounded rounded-3"
                  initial={{ y: "-100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card maxW="md" className="card__prof">
                    <CardHeader>
                      <Flex spacing="4">
                        <Flex
                          flex="1"
                          gap="4"
                          alignItems="center"
                          flexWrap="wrap"
                        >
                          <Avatar name={user?.name} src={user?.photo} />

                          <Box>
                            <Heading size="sm">{user?.name}</Heading>
                          </Box>
                        </Flex>
                      </Flex>
                    </CardHeader>

                    <CardFooter
                      justify="space-between"
                      flexWrap="wrap"
                      sx={{
                        "& > button": {
                          minW: "136px",
                        },
                      }}
                    >
                      <Button flex="1" variant="ghost">
                        <Link to="/myOrders">Orders</Link>
                      </Button>

                      {user?.role === "admin" && (
                        <Button flex="1" variant="ghost">
                          <Link to="/admin/dashboard">Dashboard</Link>
                        </Button>
                      )}

                      <Button flex="1" variant="ghost" onClick={logoutHandler}>
                        Logout
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
