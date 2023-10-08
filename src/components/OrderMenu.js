import React, { useState } from "react";
import classes from "./OrderMenu.module.css"

import OrderMeals from "./OrderMeals";

const OrderMenu = (props) => {
  const [menuSelection, setMenuSelection] = useState("pizzaList");

  const starterMenuHandler = () => {
    setMenuSelection("starterList");
  }

  const pizzaMenuHandler = () => {
    setMenuSelection("pizzaList");
  }

  const dessertMenuHandler = () => {
    setMenuSelection("dessertList");
  }

  return (
    <section className={classes["order-menu__section"]} id="menu">
      <h1 className={classes["order-menu__header"]}>MENU</h1>
      <div className={classes["order-menu__tabs"]}>
        <div onClick={starterMenuHandler} className={menuSelection === "starterList" ? `${classes["order-menu__tab"]} ${classes["order-menu__tab-active"]}` : classes["order-menu__tab"]}>STARTERS</div>
        <div onClick={pizzaMenuHandler} className={menuSelection === "pizzaList" ? `${classes["order-menu__tab"]} ${classes["order-menu__tab-active"]}` : classes["order-menu__tab"]}>PIZZAS</div>
        <div onClick={dessertMenuHandler} className={menuSelection === "dessertList" ? `${classes["order-menu__tab"]} ${classes["order-menu__tab-active"]}` : classes["order-menu__tab"]}>DESSERTS</div>
      </div>
      <OrderMeals menuToDisplay={menuSelection} />
    </section>
  )
}

export default OrderMenu;
