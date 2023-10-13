import React from "react";
import classes from "./OrderPaymentForm.module.css";

const OrderPaymentForm = () => {


  let content = (
    <form>
      <div className={classes["payment__form"]}>
        <div className={classes["payment__form-container"]}>
          <div className={classes["payment__form-control"]}>
            <label htmlFor="number">Card Number</label>
            <input type="text" id="number" />
          </div>
          <div className={classes["payment__form-control"]}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className={classes["payment__form-control"]}>
            <label htmlFor="expiry">Expiry Date</label>
            <input type="text" id="expiry" />
          </div>
          <div className={classes["payment__form-control"]}>
            <label htmlFor="security">Security Number</label>
            <input type="text" id="security" />
          </div>
        </div>
      </div>
    </form>
  )

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  )
}

export default OrderPaymentForm;
