import Cart from "./Cart";
import classes from "./OrderSummary.module.css";

const OrderSummary = (props) => {
  return (
    <div className={classes["order-summary__container"]}>
      <h1 className={classes["order-summary__title"]}>ORDER SUMMARY</h1>
      <Cart onShowCheckout={props.onShowCheckout} />
    </div>
  )
}

export default OrderSummary;
