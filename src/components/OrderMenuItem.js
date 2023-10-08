import { useContext } from "react";

import React from "react";
import classes from "./OrderMenuItem.module.css"
import OrderMenuItemForm from "./OrderMenuItemForm";
import CartContext from "../store/cart.context";

const OrderMenuItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: 1,
      price: props.price
    })
  }

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
      <OrderMenuItemForm onAddToCart={addToCartHandler} />
    </li>
  )
}

export default OrderMenuItem;
