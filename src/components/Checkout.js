import { useContext } from "react";

import Modal from "../Layout/Modal";
import CartContext from "../store/cart.context";
import classes from "./Checkout.module.css";
import OrderDeliveryForm from "./OrderDeliveryForm";
import OrderPaymentForm from "./OrderPaymentForm";

const Checkout = (props) => {
  const cartCtx = useContext(CartContext);

  const checkoutTotal = `£${cartCtx.total.toFixed(2)}`;

  return (
    <Modal onClose={props.onClose}>
      <div className={classes["checkout__container"]}>
        <div className={classes["checkout__title-main"]}>COMPLETE ORDER</div>
        <div className={`${classes["checkout__total"]} ${classes["checkout-section"]}`}>
          <div>Total</div>
          <div>{checkoutTotal}</div>
        </div>
        <div className={classes["checkout-section"]}>
          <div className={classes["checkout__title"]}>DELIVERY</div>
          <OrderDeliveryForm />
        </div>
        <div className={classes["checkout-section"]}>
          <div className={classes["checkout__title"]}>PAYMENT</div>
          <OrderPaymentForm />
        </div>
      </div>
    </Modal>
  )
}

export default Checkout;
