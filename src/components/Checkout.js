import { useContext, useRef, useState } from "react";

import Modal from "../Layout/Modal";
import CartContext from "../store/cart.context";
import classes from "./Checkout.module.css";
import OrderDeliveryForm from "./OrderDeliveryForm";
import OrderPaymentForm from "./OrderPaymentForm";

const Checkout = (props) => {
  const [orderSubmit, setOrderSubmit] = useState(false);

  const [successOrderSubmit, setSuccessOrderSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setOrderSubmit(true);

    if (!deliveryData.validDeliveryDetails || !paymentData.validPaymentDetails) {
      return;
    }

    submitOrderHandler();
    deliveryRef.current.formResetHandler();
    paymentRef.current.formResetHandler();
    setOrderSubmit(false);
  }

  const saveDeliveryDataHandler = (data) => {
    deliveryData = data;
  }

  const savePaymentDataHandler = (data) => {
    paymentData = data;
  }

  const submitOrderHandler = async () => {
    setIsSubmitting(true);
    await fetch("https://bros-pizza-2757a-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {
      method: "POST",
      body: JSON.stringify({
        name: deliveryData.name,
        phoneNumber: deliveryData.number,
        email: deliveryData.email,
        houseNumber: deliveryData.houseNumber,
        street: deliveryData.street,
        postcode: deliveryData.postcode,
        cardName: paymentData.cardName,
        cardNumber: paymentData.cardNumber,
        cardExpiryDate: paymentData.expiryDate,
        cardSecurityNumber: paymentData.securityNumber,
        orderItems: cartCtx.items,
        orderTotal: cartCtx.total
      })
    })
    setIsSubmitting(false);
    setSuccessOrderSubmit(true);

    cartCtx.clearCart();
  }

  const formContent = (
    <>
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
      {orderSubmit && <div className={classes["checkout__error"]}>Please enter highlighted fields.</div>}
    </>
  )

  const isSubmittingOrderContent = (
    <p className={classes["booking__form-response-text"]}>Sending order...</p>
  )

  const submittedOrderContent = (
    <div className={classes["checkout__success-container"]} >
      <p className={classes["checkout-response-text"]}>Order sent!</p>
      <img alt="543-pizza-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/543-pizza-1.svg/512px-543-pizza-1.svg.png" className={classes["checkout__img"]} />
    </div>
  )

  return (
    <Modal onClose={props.onClose}>
      <div className={classes["checkout__container"]}>
        {!isSubmitting && !successOrderSubmit && formContent}
        {isSubmitting && isSubmittingOrderContent}
        {!isSubmitting && successOrderSubmit && submittedOrderContent}
      </div>
    </Modal>
  )
}

export default Checkout;
