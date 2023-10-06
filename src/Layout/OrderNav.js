import React from "react";
import { Link } from "react-router-dom";
import classes from "./OrderNav.module.css";

const OrderNav = () => {
  return (
    <React.Fragment>
      <div className={classes["ordernav__border-pattern"]}></div>
      <button className={classes["ordernav__back-button"]}><Link to="/">BACK</Link></button>
    </React.Fragment>
  )
}

export default OrderNav;
