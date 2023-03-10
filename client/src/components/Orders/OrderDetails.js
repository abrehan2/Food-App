// IMPORTS -
import React from "react";
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

const OrderDetails = () => {
  return (
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
                      Abdul Rehan
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Phone
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      123456789
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Address
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      F-10, house no.56
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Order status
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Processing
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Placed at
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      27/02/23
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Delivered at
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      27/02/23
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Payment method
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Online
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Item's total
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      2000
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Shipping charges
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      200
                    </Text>
                  </Box>

                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Tax
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      20
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Total amount
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      5000
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
                      {10} x {200}
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
                      6000
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
