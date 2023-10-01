import React, { useState } from "react";
import classes from "./BookingForm.module.css";
import useInput from "../hooks/use-input";

const BookingForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetNameInput
  } = useInput(value => value.trim() !== "")

  const {
    value: enteredNumber,
    isValid: enteredNumberIsValid,
    hasError: numberInputHasError,
    inputChangeHandler: numberChangeHandler,
    inputBlurHandler: numberBlurHandler,
    resetInput: resetNumberInput
  } = useInput(value => value.trim().length > 8)

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmailInput
  } = useInput(value => value.includes("@") && value.length > 6)

  const {
    value: enteredDate,
    isValid: enteredDateIsValid,
    hasError: dateInputHasError,
    inputChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    resetInput: resetDateInput
  } = useInput(value => value.trim() !== "")

  const {
    value: enteredTime,
    isValid: enteredTimeIsValid,
    hasError: timeInputHasError,
    inputChangeHandler: timeChangeHandler,
    inputBlurHandler: timeBlurHandler,
    resetInput: resetTimeInput
  } = useInput(value => value.trim() !== "")

  let formIsValid;

  if (enteredNameIsValid && enteredNumberIsValid && enteredEmailIsValid && enteredDateIsValid && enteredTimeIsValid) {
    formIsValid = true;
  }

  // const dateCheckBlurHandler = (event) => {
  //   console.log(typeof(event.target.value));
  // }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFormSubmit(true);

    if (!formIsValid) {
      return;
    }

    resetNameInput();
    resetNumberInput();
    resetEmailInput();
    resetDateInput();
    resetTimeInput();
    setFormSubmit(false);
  }

  const nameInputClasses = nameInputHasError ? `${classes["bookings__form-invalid"]}` : "";
  const numberInputClasses = numberInputHasError ? `${classes["bookings__form-invalid"]}` : "";
  const emailInputClasses = emailInputHasError ? `${classes["bookings__form-invalid"]}` : "";
  const dateInputClasses = dateInputHasError ? `${classes["bookings__form-invalid"]}` : "";
  const timeInputClasses = timeInputHasError ? `${classes["bookings__form-invalid"]}` : "";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes["bookings__form"]}>
        <div className={classes["bookings__form-container"]}>
          <div className={classes["bookings__form-control"]}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} className={nameInputClasses} />
          </div>
          <div className={classes["bookings__form-control"]}>
            <label htmlFor="number">Number</label>
            <input type="text" id="number" value={enteredNumber} onChange={numberChangeHandler} onBlur={numberBlurHandler} className={numberInputClasses} />
          </div>
          <div className={classes["bookings__form-control"]}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} className={emailInputClasses} />
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
            <input type="date" id="date" value={enteredDate} onChange={dateChangeHandler} onBlur={dateBlurHandler} className={dateInputClasses} />
          </div>
          <div className={classes["bookings__form-control"]}>
            <label htmlFor="time">Time</label>
            <input type="time" id="time" value={enteredTime} onChange={timeChangeHandler} onBlur={timeBlurHandler} className={timeInputClasses} />
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
