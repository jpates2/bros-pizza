import React, { useState } from "react";
import classes from "./Menu.module.css"

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
    <section className={classes["menu__section"]} id="menu">
      <h1 className={classes["menu__header"]}>MENU</h1>
      <div className={classes["menu__tabs"]}>
        <div onClick={starterMenuHandler} className={menuSelection === "starterList" ? `${classes["menu__tab"]} ${classes["menu__tab-active"]}` : classes["menu__tab"]}>STARTERS</div>
        <div onClick={pizzaMenuHandler} className={menuSelection === "pizzaList" ? `${classes["menu__tab"]} ${classes["menu__tab-active"]}` : classes["menu__tab"]}>PIZZAS</div>
        <div onClick={dessertMenuHandler} className={menuSelection === "dessertList" ? `${classes["menu__tab"]} ${classes["menu__tab-active"]}` : classes["menu__tab"]}>DESSERTS</div>
      </div>
      <OrderMeals menuToDisplay={menuSelection} />
    </section>
  )
}

export default OrderMenu;
