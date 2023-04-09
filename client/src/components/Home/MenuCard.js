// IMPORTS -
import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Stack,
  Image,
  Text,
  Heading,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import "../../styles/MenuCard.css";

const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 }) => {
  return (
    <>
      <motion.div
        className="menu__wrapper"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay }}
      >
        <Card maxW="sm">
          <CardBody>
            <div className="image__wrapper">
              <Image
                src={burgerSrc}
                alt={itemNum}
                borderRadius="lg"
                className="img-fluid"
              />
            </div>
            <Stack mt="6" spacing="3">
              <Heading size="md">{title}</Heading>
              <Text color="red.600" fontSize="2xl" fontWeight="semibold">
                ${price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter className="justify-content-center">
            <ButtonGroup spacing="3">
              <Button
                variant="ghost"
                colorScheme="red"
                onClick={() => handler(itemNum)}
              >
                <i class="fas fa-shopping-cart"></i>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
};

export default MenuCard;
