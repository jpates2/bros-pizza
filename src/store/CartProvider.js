import { useReducer } from "react";
import CartContext from "./cart.context";

const defaultCartState = {
  items: [],
  total: 0
}

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotal = state.total + (action.item.price * action.item.amount);
    return {
      items: updatedItems,
      total: updatedTotal
    }
  }
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = item => {
    dispatchCartAction({type: "ADD", item: item})
  }

  const removeItemFromCartHandler = item => {

  }

  const cartContext = {
    items: cartState.items,
    total: cartState.total,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;
