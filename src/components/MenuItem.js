import React from "react";
import classes from "./MenuItem.module.css"

const MenuItem = (props) => {
  return (
    <li className={classes["menu__item"]}>
      <div className={classes["menu__item-text"]}>
        <h3 className={classes["menu__item-name"]}>{props.name}</h3>
        <div className={classes["menu__item-description"]}>{props.description}</div>
      </div>
      <div>
        <div className={classes["menu__item-price"]}>{props.price}</div>
      </div>
    </li>
  )
}

export default MenuItem;
