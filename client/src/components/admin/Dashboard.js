// IMPORTS -
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Text, Heading } from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import "../../styles/Dashboard.css";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getAdminStats } from "../../redux/actions/admin";
import Loader from "../layout/Loader";

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
  const dispatch = useDispatch();
  const { user__count, order__count, totalIncome, error, loading } =
    useSelector((state) => state.admin);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "CLEAR_ERRORS",
      });
    }

    dispatch(getAdminStats());
  }, [dispatch, error]);

  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: order__count
          ? [
              order__count.preparing,
              order__count.shipped,
              order__count.delivered,
            ]
          : [0, 0, 0],
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
      {loading ? (
        <Loader />
      ) : (
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
                    <Box title="Users" value={user__count} />
                    <Box title="Orders" value={order__count?.total} />
                    <Box title="Income" value={totalIncome} />
                  </aside>
                </div>

                <div className="chart__wrapper">
                  <Doughnut data={data} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
