import { useContext, useState } from "react";

import classes from "./Cart.module.css";
import CartContext from "../store/cart.context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const total = `£${cartCtx.total.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  let orderRender;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  }

  const cartItemAddHandler = item => {
    cartCtx.addItem(item);
  }

  const cartItems = cartCtx.items.map(item =>
    <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
  );

  if (hasItems) {
    orderRender = (
      <>
        <div className={classes["cart__total"]}>
          <div>TOTAL</div>
          <div>{total}</div>
        </div>
        <div>
          <button onClick={props.onShowCheckout} className={classes["cart__button"]}>ORDER</button>
        </div>
      </>
    )
  }

  if (!hasItems) {
    orderRender = (
      <p className={classes["cart__text-empty"]}>Add items to your order now!</p>
    )
  }

  return (
    <div className={classes["cart__container"]}>
      <ul className={classes["cart__list"]}>
        {cartItems}
      </ul>
      {orderRender}
    </div>
  )
}

export default Cart;
