import React from "react";

import classes from "./Menu.module.css"

const Menu = () => {
  return (
    <section className={classes["menu__section"]}>
      <h1 className={classes["menu__header"]}>MENU</h1>
      <div className={classes["menu__tabs"]}>
        <div className={classes["menu__tab"]}>STARTERS</div>
        <div className={classes["menu__tab"]}>PIZZAS</div>
        <div className={classes["menu__tab"]}>DESSERTS</div>
      </div>
    </section>
  )
}

export default Menu;
