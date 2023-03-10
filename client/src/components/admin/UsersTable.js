// IMPORTS -
import React from "react";
import DataTable from "react-data-table-component";
import Img from "../../assets/user-img.jpg";
import "../../styles/UsersTable.css";

export const UsersTable = () => {
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

  const data = [
    {
      id: 1,
      name: "Rehan",
      photo: (
        <div className="img__wrapper">
          <img src={Img} alt="user" className="img-fluid" />
        </div>
      ),
      role: "Admin",
      at: "03-03-23",
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
};
