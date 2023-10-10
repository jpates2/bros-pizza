import { useContext } from "react";

import Modal from "../Layout/Modal";
import CartContext from "../store/cart.context";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const cartCtx = useContext(CartContext);

  const checkoutTotal = `£${cartCtx.total.toFixed(2)}`;

  return (
    <Modal onClose={props.onClose}>
      <div className={classes["checkout__container"]}>
        <div className={classes["checkout__title"]}>COMPLETE ORDER</div>
        <div className={classes["checkout__total"]}>
          <div>Total</div>
          <div>{checkoutTotal}</div>
        </div>
        <div>
          <div className={classes["checkout__title"]}>DELIVERY</div>
        </div>
        <div>
          <div className={classes["checkout__title"]}>PAYMENT</div>
        </div>
      </div>
    </Modal>
  )
}

export default Checkout;
