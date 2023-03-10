// IMPORTS -
import React from "react";
import "../../styles/Founder.css";
import sectionBg from "../../assets/header-img.png";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Stack,
  Box,
  StackDivider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Founder = () => {
  return (
    <>
      <section className="container-fluid founder__container__wrapper">
        <div className="row founder__row__wrapper">
          <motion.div
            className="col-lg-5 founder__picture__wrapper"
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src={sectionBg} alt="section-img" className="img-fluid" />
          </motion.div>

          <motion.div
            className="col-lg-7 founder__info__wrapper shadow"
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="card__food">
              <CardHeader>
                <Heading size="md" className="fs-4">
                  Food Report
                </Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading
                      size="xs"
                      textTransform="capitalize"
                      className="fs-5"
                    >
                      Summary
                    </Heading>
                    <Text pt="2" fontSize="large" className="fw-medium">
                      Food nourishes both the body and soul. It brings people
                      together and creates memories. A diverse and balanced diet
                      is essential for a healthy and fulfilling life
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      size="xs"
                      textTransform="capitalize"
                      className="fs-5"
                    >
                      Overview
                    </Heading>
                    <Text pt="2" fontSize="large" className="fw-medium">
                      Food is a fundamental aspect of human life. It provides
                      the energy and nutrients necessary for physical and mental
                      development
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Founder;
