import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink style={{ textDecoration: "none", color: "white" }} to={"/"}>
        HOME
      </NavLink>
      <NavLink style={{ textDecoration: "none", color: "white" }} to={"/add"}>
        ADD
      </NavLink>
      <NavLink style={{ textDecoration: "none", color: "white" }} to={"/edit"}>
        EDIT
      </NavLink>
    </div>
  );
};

export default Navbar;
