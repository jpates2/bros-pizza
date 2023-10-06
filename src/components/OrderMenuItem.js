import React from "react";
import classes from "./OrderMenuItem.module.css"

const OrderMenuItem = (props) => {
  return (
    <li className={classes["order-menu__item-container"]}>
      <div className={classes["order-menu__item"]}>
        <div className={classes["order-menu__item-text"]}>
          <h3 className={classes["order-menu__item-name"]}>{props.name}</h3>
          <div className={classes["order-menu__item-description"]}>{props.description}</div>
        </div>
        <div>
          <div className={classes["order-menu__item-price"]}>{props.price}</div>
        </div>
      </div>
      <div className={classes["order-menu__button-container"]}>
        <button className={classes["order-menu__button"]}>ADD</button>
      </div>
    </li>
  )
}

export default OrderMenuItem;
