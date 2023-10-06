import React from "react";
import OrderNav from "../Layout/OrderNav";
import OrderSummary from "../components/OrderSummary";
import OrderMenu from "../components/OrderMenu";

function OrderPage() {
  return (
    <React.Fragment>
      <OrderNav />
      <OrderSummary />
      <OrderMenu />
    </React.Fragment>
  )
}

export default OrderPage;
