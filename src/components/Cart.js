import { useContext } from "react";

import classes from "./Cart.module.css";
import CartContext from "../store/cart.context";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const total = `£${cartCtx.total.toFixed(2)}`;

  const cartItems = cartCtx.items.map(item =>
    <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} />
  );

  return (
    <div className={classes["cart__container"]}>
      <ul className={classes["cart__list"]}>
        {cartItems}
      </ul>
      <div className={classes["cart__total"]}>
        <div>TOTAL</div>
        <div>{total}</div>
      </div>
      <div>
        <button className={classes["cart__button"]}>ORDER</button>
      </div>
    </div>
  )
}

export default Cart;
