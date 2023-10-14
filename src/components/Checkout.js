import { useContext, useRef } from "react";

import Modal from "../Layout/Modal";
import CartContext from "../store/cart.context";
import classes from "./Checkout.module.css";
import OrderDeliveryForm from "./OrderDeliveryForm";
import OrderPaymentForm from "./OrderPaymentForm";

const Checkout = (props) => {
  const cartCtx = useContext(CartContext);
  const checkoutTotal = `£${cartCtx.total.toFixed(2)}`;

  const deliveryRef = useRef();
  const paymentRef = useRef();

  let deliveryData;
  let paymentData;

  const placeOrderHandler = (event) => {
    event.preventDefault();
    deliveryRef.current.formSubmitHandler();
    paymentRef.current.formSubmitHandler();

    if (!deliveryData.validDeliveryDetails || !paymentData.validPaymentDetails) {
      return;
    }

    deliveryRef.current.formResetHandler();
    paymentRef.current.formResetHandler();
  }

  const saveDeliveryDataHandler = (data) => {
    deliveryData = data;
  }

  const savePaymentDataHandler = (data) => {
    paymentData = data;
  }

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
          <OrderDeliveryForm onSaveDeliveryData={saveDeliveryDataHandler} ref={deliveryRef} />
        </div>
        <div className={classes["checkout-section"]}>
          <div className={classes["checkout__title"]}>PAYMENT</div>
          <OrderPaymentForm onSavePaymentData={savePaymentDataHandler} ref={paymentRef} />
        </div>
        <form onSubmit={placeOrderHandler}>
          <button className={classes["checkout__button"]}>PLACE ORDER</button>
        </form>
      </div>
    </Modal>
  )
}

export default Checkout;
