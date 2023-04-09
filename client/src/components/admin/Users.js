// IMPORTS -
import React from "react";
import "../../styles/Users.css";
import MetaData from "../layout/MetaData";
import { UsersTable } from "./UsersTable";

const Users = () => {
  return (
    <>
      <MetaData title="Users" />
      <div className="container-fluid users__wrapper">
        <div className="row users__row">
          <div className="col-md users__col">
            <UsersTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
