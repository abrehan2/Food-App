// IMPORTS -
import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";
import "../../styles/OrderDetails.css";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../redux/actions/order";
import Loader from "../layout/Loader";

const OrderDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { order, error, loading } = useSelector((state) => state.MyOrders);

  console.log(order);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "CLEAR_ERROR",
      });
    }

    dispatch(getOrderDetails(params.id));
  }, [dispatch, error, params.id]);

  return (
    <>
      {loading === false && order !== undefined ? (
        <>
          <MetaData title="Order Details" />
          <div className="container-fluid details__wrapper">
            <div className="row details__row__wrapper">
              <div className="col-md details__col__wrapper rounded rounded-3">
                <Card className="shadow details__card__wrapper">
                  <CardHeader>
                    <Heading size="md">Order Details</Heading>
                  </CardHeader>

                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Name
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {order?.user.name}
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Phone
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {order?.shippingInfo.phoneNo}
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Shipping Address
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {`House no.${order?.shippingInfo.houseNo} ${order?.shippingInfo.city} ${order?.shippingInfo.state} ${order?.shippingInfo.country} ${order?.shippingInfo.pinCode}`}
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Order status
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {order?.orderStatus}
                        </Text>
                      </Box>

                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Placed at
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {order?.createdAt.split("T")[0]}
                        </Text>
                      </Box>

                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Delivered at
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {order?.deliveredAt
                            ? order?.deliveredAt.split("T")[0]
                            : "NA"}
                        </Text>
                      </Box>

                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Payment method
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {order?.paymentMethod}
                        </Text>
                      </Box>

                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Item's total
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {order?.itemsPrice}
                        </Text>
                      </Box>

                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Shipping charges
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {order?.shippingCharges}
                        </Text>
                      </Box>

                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Tax
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {order?.taxPrice}
                        </Text>
                      </Box>
                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Total amount
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          {order?.totalAmount}
                        </Text>
                      </Box>

                      <Box>
                        <Heading size="xs" textTransform="uppercase">
                          Ordered items
                        </Heading>
                        <Text pt="2" fontSize="sm">
                          Cheese burgers
                        </Text>
                        <Text pt="2" fontSize="sm">
                          {order?.orderItems.cheeseBurger.quantity} x{" "}
                          {order?.orderItems.cheeseBurger.price}
                        </Text>

                        <Text pt="2" fontSize="sm">
                          Veg Cheese burgers
                        </Text>
                        <Text pt="2" fontSize="sm">
                          {order?.orderItems.vegCheeseBurger.quantity} x{" "}
                          {order?.orderItems.vegCheeseBurger.price}
                        </Text>

                        <Text pt="2" fontSize="sm">
                          Burger With Fries
                        </Text>
                        <Text pt="2" fontSize="sm">
                          {order?.orderItems.burgerWithFries.quantity} x{" "}
                          {order?.orderItems.burgerWithFries.price}
                        </Text>
                      </Box>

                      <Box>
                        <Heading
                          size="md"
                          textTransform="uppercase"
                          fontWeight={800}
                        >
                          Sub total
                        </Heading>
                        <Text pt="2" fontSize="md" fontWeight={700}>
                          {order?.itemsPrice}
                        </Text>
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default OrderDetails;
