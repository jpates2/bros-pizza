import { useContext } from "react";

import classes from "./Cart.module.css";
import CartContext from "../store/cart.context";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const total = `£${cartCtx.total.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  let orderRender;

  const cartItems = cartCtx.items.map(item =>
    <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} />
  );

    if (hasItems) {
      orderRender = (
        <>
          <div className={classes["cart__total"]}>
            <div>TOTAL</div>
            <div>{total}</div>
          </div>
          <div>
            <button className={classes["cart__button"]}>ORDER</button>
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
