import React, { useState } from "react";
import OrderNav from "../Layout/OrderNav";
import OrderSummary from "../components/OrderSummary";
import OrderMenu from "../components/OrderMenu";
import CartProvider from "../store/CartProvider";
import Checkout from "../components/Checkout";
import ScrollToTop from "../Layout/ScrollToTop";
import Footer from "../Layout/Footer";

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
      <ScrollToTop />
      {checkoutIsShown && <Checkout onClose={hideCheckoutHandler} />}
      <OrderNav />
      <OrderSummary onShowCheckout={showCheckoutHandler} />
      <OrderMenu />
      <Footer />
    </CartProvider>
  )
}

export default OrderPage;
