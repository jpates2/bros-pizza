import React, { useState } from "react";
import OrderNav from "../Layout/OrderNav";
import OrderSummary from "../components/OrderSummary";
import OrderMenu from "../components/OrderMenu";
import CartProvider from "../store/CartProvider";
import Checkout from "../components/Checkout"

function OrderPage() {
  const [checkoutIsShown, setCheckoutIsShown] = useState(false);

  const showCheckoutHandler = () => {
    setCheckoutIsShown(true);
  }

  const hideCheckoutHandler = () => {
    setCheckoutIsShown(false);
  }

  return (
    <CartProvider>
      {checkoutIsShown && <Checkout onClose={hideCheckoutHandler} />}
      <OrderNav />
      <OrderSummary onShowCheckout={showCheckoutHandler} />
      <OrderMenu />
    </CartProvider>
  )
}

export default OrderPage;
