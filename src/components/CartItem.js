const CartItem = (props) => {
  return (
    <li>
      <div>
        {props.name}
      </div>
      <div>
        <button>-</button>
        {props.amount}
        <button>+</button>
      </div>
      <div>{props.price * props.amount}</div>
    </li>
  )
}

export default CartItem;
