import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `£${(props.price * props.amount).toFixed(2)}`

  return (
    <li className={classes["cart__list-item"]}>
      <div className={classes["cart__list-name"]}>
        {props.name.toUpperCase()}
      </div>
      <div className={classes["cart__list-price"]}>{price}</div>
      <div className={classes["cart__list-button-container"]}>
        <button onClick={props.onRemove} className={`${classes["cart__list-button"]} ${classes["cart__list-button-minus"]}`}><p>-</p></button>
        <div>{props.amount}</div>
        <button onClick={props.onAdd} className={classes["cart__list-button"]}>+</button>
      </div>
    </li>
  )
}

export default CartItem;
