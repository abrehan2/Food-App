// IMPORTS -
import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import "../../styles/UsersTable.css";
import { useDispatch, useSelector } from "react-redux";
import { getAdminUsers } from "../../redux/actions/admin";
import { toast } from "react-hot-toast";
import Loader from "../layout/Loader";

export const UsersTable = () => {
  const dispatch = useDispatch();
  const { users, error, loading } = useSelector((state) => state.admin);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "CLEAR_ERRORS",
      });
    }

    dispatch(getAdminUsers());
  }, [dispatch, error]);

  const columns = [
    {
      name: "User Id",
      selector: (row) => row.id,
    },

    {
      name: "Name",
      selector: (row) => row.name,
    },

    {
      name: "Photo",
      selector: (row) => row.photo,
    },

    {
      name: "Role",
      selector: (row) => row.role,
    },

    {
      name: "Created at",
      selector: (row) => row.at,
    },
  ];

  const data = [];

  users &&
    users.map((item) => {
      return data.push({
        id: item?._id,
        name: item?.name,
        photo: (
          <div className="img__wrapper">
            <img src={item?.photo} alt={item?.id} className="img-fluid" />
          </div>
        ),
        role: item?.role,
        at: item?.createdAt.split("T")[0],
      });
    });

  return (
    <>{loading ? <Loader /> : <DataTable columns={columns} data={data} />}</>
  );
};
