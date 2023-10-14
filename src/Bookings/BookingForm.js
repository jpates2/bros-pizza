import React, { useState } from "react";
import classes from "./BookingForm.module.css";
import useInput from "../hooks/use-input";

const BookingForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);

  const [successFormSubmit, setSuccessFormSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  let {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    inputSubmitHandler: nameSubmitHandler,
    resetInput: resetNameInput
  } = useInput(value => value.trim() !== "")

  const {
    value: enteredNumber,
    isValid: enteredNumberIsValid,
    hasError: numberInputHasError,
    inputChangeHandler: numberChangeHandler,
    inputBlurHandler: numberBlurHandler,
    inputSubmitHandler: numberSubmitHandler,
    resetInput: resetNumberInput
  } = useInput(value => value.trim().length > 8)

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputSubmitHandler: emailSubmitHandler,
    resetInput: resetEmailInput
  } = useInput(value => value.includes("@") && value.length > 6)

  const {
    value: enteredLocation,
    isValid: enteredLocationIsValid,
    hasError: locationInputHasError,
    inputChangeHandler: locationChangeHandler,
    inputBlurHandler: locationBlurHandler,
    resetInput: resetLocationInput
  } = useInput(value => value != null)

  const {
    value: enteredDate,
    isValid: enteredDateIsValid,
    hasError: dateInputHasError,
    inputChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    inputSubmitHandler: dateSubmitHandler,
    resetInput: resetDateInput
  } = useInput(value => value.trim() !== "")

  const {
    value: enteredTime,
    isValid: enteredTimeIsValid,
    hasError: timeInputHasError,
    inputChangeHandler: timeChangeHandler,
    inputBlurHandler: timeBlurHandler,
    inputSubmitHandler: timeSubmitHandler,
    resetInput: resetTimeInput
  } = useInput(value => value.trim() !== "")

  let formIsValid;

  if (enteredNameIsValid && enteredNumberIsValid && enteredEmailIsValid && enteredLocationIsValid && enteredDateIsValid && enteredTimeIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFormSubmit(true);
    nameSubmitHandler();
    numberSubmitHandler();
    emailSubmitHandler();
    dateSubmitHandler();
    timeSubmitHandler();

    if (!formIsValid) {
      return;
    }

    submitBookingHandler();
    resetNameInput();
    resetNumberInput();
    resetEmailInput();
    resetLocationInput();
    resetDateInput();
    resetTimeInput();
    setFormSubmit(false);
  }

  const submitBookingHandler = async () => {
    setIsSubmitting(true);
    await fetch("https://bros-pizza-2757a-default-rtdb.europe-west1.firebasedatabase.app/bookings.json", {
      method: "POST",
      body: JSON.stringify({
        enteredName,
        enteredNumber,
        enteredEmail,
        enteredLocation,
        enteredDate,
        enteredTime
      })
    })
    setIsSubmitting(false);
    setSuccessFormSubmit(true);
  }

  let nameInputClasses = nameInputHasError ? `${classes["bookings__form-invalid"]}` : "";
  const numberInputClasses = numberInputHasError ? `${classes["bookings__form-invalid"]}` : "";
  const emailInputClasses = emailInputHasError ? `${classes["bookings__form-invalid"]}` : "";
  const locationInputClasses = locationInputHasError ? `${classes["bookings__form-invalid"]}` : "";
  const dateInputClasses = dateInputHasError ? `${classes["bookings__form-invalid"]}` : "";
  const timeInputClasses = timeInputHasError ? `${classes["bookings__form-invalid"]}` : "";

  const formContent = (
    <form onSubmit={formSubmitHandler}>
      <div className={classes["bookings__form"]}>
        <div className={classes["bookings__form-container"]}>
          <div className={classes["bookings__form-control"]}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler}  className={nameInputClasses} />
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
            <select type="text" id="location" value={enteredLocation} onChange={locationChangeHandler} onBlur={locationBlurHandler} className={locationInputClasses}>
              <option value="balham">Balham</option>
              <option value="barbican">Barbican</option>
              <option value="wapping">Wapping</option>
            </select>
          </div>
          <div className={classes["bookings__form-control"]}>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" min={new Date().toISOString().split('T')[0]} value={enteredDate} onChange={dateChangeHandler} onBlur={dateBlurHandler} className={dateInputClasses} />
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
      {formSubmit && <p className={classes["bookings__form-error"]}>Please enter missing fields</p>}
    </form>
  )

  const isSubmittingFormContent = (
    <p className={classes["booking__form-response-text"]}>Sending booking...</p>
  )

  const submittedFormContent = (
    <p className={classes["booking__form-response-text"]}>Booking sent!</p>
  )

  return (
    <React.Fragment>
      {!isSubmitting && !successFormSubmit && formContent}
      {isSubmitting && isSubmittingFormContent}
      {!isSubmitting && successFormSubmit && submittedFormContent}
    </React.Fragment>
  )
}

export default BookingForm;
