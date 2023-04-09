// IMPORTS -
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import "../../styles/About.css";
import MetaData from "../layout/MetaData";

const About = () => {
  return (
    <>
      <MetaData title="About" />
      <div className="container-fluid about__wrapper">
        <div className="row about__row">
          <div className="col-md about__col">
            <div className="card__about shadow rounded rounded-3">
              <Card align="center">
                <CardHeader>
                  <Heading size="md">Overview</Heading>
                </CardHeader>
                <CardBody>
                  <Text className="lead">
                    Web App built from scratch using MERN Stack by Abdul Rehan
                  </Text>
                </CardBody>
                <CardFooter></CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
