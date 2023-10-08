import classes from "./OrderMenuItemForm.module.css";

const OrderMenuItemForm = (props) => {
  const submitHandler = event => {
    event.preventDefault();
    props.onAddToCart(1);
  }

  return (
    <form onSubmit={submitHandler} className={classes["order-menu__button-container"]}>
      <button className={classes["order-menu__button"]}>ADD</button>
    </form>
  )
}

export default OrderMenuItemForm;
