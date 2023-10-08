import classes from "./OrderMenuItemForm.module.css";

const OrderMenuItemForm = () => {
  return (
    <div className={classes["order-menu__button-container"]}>
      <button className={classes["order-menu__button"]}>ADD</button>
    </div>
  )
}

export default OrderMenuItemForm;
