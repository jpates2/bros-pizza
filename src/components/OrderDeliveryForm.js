import React from "react";
import classes from "./OrderDeliveryForm.module.css";

const OrderDeliveryForm = () => {


  let content = (
    <form>
      <div className={classes["delivery__form"]}>
        <div className={classes["delivery__form-container"]}>
          <div>
            <div className={classes["delivery__form-control"]}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className={classes["delivery__form-control"]}>
              <label htmlFor="number">Number</label>
              <input type="text" id="number" />
            </div>
            <div className={classes["delivery__form-control"]}>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </div>
          </div>

          <div>
            <div className={classes["delivery__form-control"]}>
              <label htmlFor="house">House Number</label>
              <input type="text" id="house" />
            </div>
            <div className={classes["delivery__form-control"]}>
              <label htmlFor="street">Street</label>
              <input type="text" id="street" />
            </div>
            <div className={classes["delivery__form-control"]}>
              <label htmlFor="postcode">Postcode</label>
              <input type="text" id="postcode" />
            </div>
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

export default OrderDeliveryForm;
