import React, { useState } from "react";
import classes from "./BookingForm.module.css";

const BookingForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setFormSubmit(true);

    if (!formIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNameTouched(false);
    setFormSubmit(false);
  }

  const nameInputClasses = nameInputIsInvalid ? `${classes["bookings__form-invalid"]}` : "";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes["bookings__form"]}>
        <div className={classes["bookings__form-container"]}>
          <div className={classes["bookings__form-control"]}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={enteredName} onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} className={nameInputClasses} />
          </div>
          <div className={classes["bookings__form-control"]}>
            <label htmlFor="number">Number</label>
            <input type="text" id="number" />
          </div>
          <div className={classes["bookings__form-control"]}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
        </div>
        <div className={classes["bookings__form-container"]}>
          <div className={classes["bookings__form-control"]}>
            <label htmlFor="location">Location</label>
            <select type="text" id="location">
              <option value="balham">Balham</option>
              <option value="barbican">Barbican</option>
              <option value="wapping">Wapping</option>
            </select>
          </div>
          <div className={classes["bookings__form-control"]}>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" />
          </div>
          <div className={classes["bookings__form-control"]}>
            <label htmlFor="time">Time</label>
            <input type="time" id="time" />
          </div>
        </div>
      </div>
        <div className={classes["bookings__form-button-container"]}>
          <button className={classes["bookings__form-button"]}>BOOK NOW</button>
        </div>
      {formSubmit && <p className={classes["bookings__form-error"]}>Please amend highlighted fields</p>}
    </form>
  )
}

export default BookingForm;
