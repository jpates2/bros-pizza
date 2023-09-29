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

  // const [startersSelected, setStartersSelected] = useState(false);
  // const [pizzasSelected, setPizzasSelected] = useState(true);
  // const [dessertsSelected, setDessertsSelected] = useState(false);

  //   const starterMenuHandler = () => {
  //     startersSelected(true);
  //     pizzasSelected(false);
  //     dessertsSelected(false);
  // }

  // const pizzaMenuHandler = () => {
  //   startersSelected(false);
  //   pizzasSelected(true);
  //   dessertsSelected(false);
  // }

  // const dessertMenuHandler = () => {
  //   startersSelected(false);
  //   pizzasSelected(false);
  //   dessertsSelected(true);
  // }

  return (
    <section className={classes["menu__section"]}>
      <h1 className={classes["menu__header"]}>MENU</h1>
      <div className={classes["menu__tabs"]}>
        <div onClick={starterMenuHandler} className={menuSelection === "starterList" ? `${classes["menu__tab"]} ${classes["menu__tab-active"]}` : classes["menu__tab"]}>STARTERS</div>
        <div onClick={pizzaMenuHandler} className={menuSelection === "pizzaList" ? `${classes["menu__tab"]} ${classes["menu__tab-active"]}` : classes["menu__tab"]}>PIZZAS</div>
        <div onClick={dessertMenuHandler} className={menuSelection === "dessertList" ? `${classes["menu__tab"]} ${classes["menu__tab-active"]}` : classes["menu__tab"]}>DESSERTS</div>
      </div>
      <AvailableMeals menuToDisplay={menuSelection} />
    </section>
  )
}

export default Menu;
