import React, { useState } from "react";
import classes from "./Menu.module.css"

import AvailableMeals from "./AvailableMeals";

const Menu = (props) => {
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
    <section className={classes["menu__section"]}>
      <h1 className={classes["menu__header"]}>MENU</h1>
      <div className={classes["menu__tabs"]}>
        <div onClick={starterMenuHandler} className={classes["menu__tab"]}>STARTERS</div>
        <div onClick={pizzaMenuHandler} className={classes["menu__tab"]}>PIZZAS</div>
        <div onClick={dessertMenuHandler} className={classes["menu__tab"]}>DESSERTS</div>
      </div>
      <AvailableMeals menuToDisplay={menuSelection} />
    </section>
  )
}

export default Menu;
