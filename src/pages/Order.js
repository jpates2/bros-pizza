import React from "react";
import OrderNav from "../Layout/OrderNav";
import OrderSummary from "../components/OrderSummary";
import OrderMenu from "../components/OrderMenu";
import CartProvider from "../store/CartProvider";

function OrderPage() {
  return (
    <CartProvider>
      <OrderNav />
      <OrderSummary />
      <OrderMenu />
    </CartProvider>
  )
}

export default OrderPage;
