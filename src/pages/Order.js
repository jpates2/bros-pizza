import React from "react";
import { Link } from "react-router-dom";
import OrderNav from "../Layout/OrderNav";
import OrderSummary from "../components/OrderSummary";

function OrderPage() {
  return (
    <React.Fragment>
      <OrderNav />
      <OrderSummary />
    </React.Fragment>
  )
}

export default OrderPage;
