// IMPORTS -
import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Text, Heading } from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import "../../styles/Dashboard.css";
import MetaData from "../layout/MetaData";

ChartJS.register(Tooltip, ArcElement, Legend);

const color = "#f0803c";
const textColor = "#303633";
const Box = ({ title, value }) => (
  <div className="options__component">
    <Heading as="h3" size="2xl" color={color}>
      {title === "Income" && "$"}
      {value}
    </Heading>
    <Text fontSize="lg" fontWeight="semibold" color={textColor}>
      {title}
    </Text>
  </div>
);

const Dashboard = () => {
  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: [2, 3, 4],
        backgroundColor: [
          "rgba(159, 63, 176, 0.1)",
          "rgba(78, 63, 176, 0.2)",
          "rgba(156, 0, 60, 0.3),",
        ],
        borderColor: "#F6F2FF",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <MetaData title="Dashboard" />
      <div className="container-fluid wrapper__dashboard">
        <div className="row dashboard__row">
          <div className="col-md dashboard__col">
            <div className="options__wrapper">
              <aside>
                <ButtonGroup variant="ghost" spacing="6">
                  <Button colorScheme="facebook">
                    <Link to="/admin/orders">View Orders</Link>
                  </Button>
                  <Button colorScheme="facebook">
                    <Link to="/admin/users">View Users</Link>
                  </Button>
                </ButtonGroup>
              </aside>

              <aside>
                <Box title="Users" value="200" />
                <Box title="Orders" value="200" />
                <Box title="Income" value="500" />
              </aside>
            </div>

            <div className="chart__wrapper">
              <Doughnut data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
