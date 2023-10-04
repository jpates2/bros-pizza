import React from "react";
import { Link } from "react-router-dom";

function OrderPage() {
  return (
    <React.Fragment>
      <button><Link to="/">HOME</Link></button>
      <div>Order</div>
    </React.Fragment>
  )
}

export default OrderPage;
