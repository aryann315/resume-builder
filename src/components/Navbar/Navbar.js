import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <span
        className={classes.title}
        onClick={() => {
          navigate("/");
        }}
      >
        Resume Builder
      </span>
    </div>
  );
}

export default Navbar;
