import { useContext } from "react";

import Modal from "../Layout/Modal";
import CartContext from "../store/cart.context";

const Checkout = (props) => {
  const cartCtx = useContext(CartContext);

  const checkoutTotal = `£${cartCtx.total.toFixed(2)}`;

  return (
    <Modal onClose={props.onClose} >
      <div>COMPLETE ORDER</div>
      <div>
        <span>Total</span>
        <span>{checkoutTotal}</span>
      </div>
    </Modal>
  )
}

export default Checkout;
