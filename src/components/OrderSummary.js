import Cart from "./Cart";
import classes from "./OrderSummary.module.css";

const OrderSummary = () => {
  return (
    <div className={classes["order-summary__container"]}>
      <h1 className={classes["order-summary__title"]}>ORDER SUMMARY</h1>
      <Cart />
    </div>
  )
}

export default OrderSummary;
