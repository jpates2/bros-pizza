import { useContext } from "react";

import classes from "./Cart.module.css";
import CartContext from "../store/cart.context";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const total = `£${cartCtx.total.toFixed(2)}`;

  const cartItems = cartCtx.items.map(item =>
    <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} className={classes["cart__list-item"]} />
  );

  console.log(cartItems);

  return (
    <div className={classes["cart__container"]}>
      <ul className={classes["cart__list"]}>
        {cartItems}
      </ul>
      <div>
        <span>TOTAL</span>
        <span>{total}</span>
      </div>
      <div>
        <button className={classes["cart__button"]}>ORDER</button>
      </div>
    </div>
  )
}

export default Cart;
