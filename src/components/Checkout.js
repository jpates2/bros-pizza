import { useContext, useState } from "react";

import Modal from "../Layout/Modal";
import CartContext from "../store/cart.context";
import classes from "./Checkout.module.css";
import OrderDeliveryForm from "./OrderDeliveryForm";
import OrderPaymentForm from "./OrderPaymentForm";

const Checkout = (props) => {
  const cartCtx = useContext(CartContext);
  const checkoutTotal = `£${cartCtx.total.toFixed(2)}`;

  const [deliveryDetails, setDeliveryDetails] = useState({});
  const [paymentDetails, setPaymentDetails] = useState({});

  const placeOrderHandler = (event) => {
    event.preventDefault();
  }

  const saveDeliveryDataHandler = (data) => {
    const deliveryData = data;
    console.log(deliveryData);
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
          <OrderDeliveryForm onSaveDeliveryData={saveDeliveryDataHandler} />
        </div>
        <div className={classes["checkout-section"]}>
          <div className={classes["checkout__title"]}>PAYMENT</div>
          <OrderPaymentForm />
        </div>
        <form onSubmit={placeOrderHandler}>
          <button className={classes["checkout__button"]}>PLACE ORDER</button>
        </form>
      </div>
    </Modal>
  )
}

export default Checkout;


export async function action({request, params}) {
  const formData = await request.formData();

}
