import React from "react";
import classes from "./OrderDeliveryForm.module.css";
import useInput from "../hooks/use-input";

const OrderDeliveryForm = (props) => {


  const {
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
    value: enteredHouse,
    isValid: enteredHouseIsValid,
    hasError: houseInputHasError,
    inputChangeHandler: houseChangeHandler,
    inputBlurHandler: houseBlurHandler,
    inputSubmitHandler: houseSubmitHandler,
    resetInput: resetHouseInput
  } = useInput(value => value.trim() !== "")

  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: streetInputHasError,
    inputChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    inputSubmitHandler: streetSubmitHandler,
    resetInput: resetStreetInput
  } = useInput(value => value.trim() !== "")

  const {
    value: enteredPostcode,
    isValid: enteredPostcodeIsValid,
    hasError: postcodeInputHasError,
    inputChangeHandler: postcodeChangeHandler,
    inputBlurHandler: postcodeBlurHandler,
    inputSubmitHandler: postcodeSubmitHandler,
    resetInput: resetPostcodeInput
  } = useInput(value => value.trim() !== "")

  let formIsValid;

  if (enteredNameIsValid && enteredNumberIsValid && enteredEmailIsValid && enteredHouseIsValid && enteredStreetIsValid && enteredPostcodeIsValid) {
    formIsValid = true;
  }

  const orderDelivery = {
    name: enteredName,
    number: enteredNumber,
    email: enteredEmail,
    houseNumber: enteredHouse,
    street: enteredStreet,
    postcode: enteredPostcode,
    formIsValid
  }
  // console.log(orderDelivery);

  props.onSaveDeliveryData(orderDelivery);

  // const formSubmitHandler = (event) => {
  //   event.preventDefault();
  //   nameSubmitHandler();
  //   numberSubmitHandler();

  //   if (!formIsValid) {
  //     return;
  //   }

  //   resetNameInput();
  //   resetNumberInput();
  // }

  const nameInputClasses = nameInputHasError ? `${classes["delivery__form-invalid"]}` : "";
  const numberInputClasses = numberInputHasError ? `${classes["delivery__form-invalid"]}` : "";
  const emailInputClasses = emailInputHasError ? `${classes["delivery__form-invalid"]}` : "";
  const houseInputClasses = houseInputHasError ? `${classes["delivery__form-invalid"]}` : "";
  const streetInputClasses = streetInputHasError ? `${classes["delivery__form-invalid"]}` : "";
  const postcodeInputClasses = postcodeInputHasError ? `${classes["delivery__form-invalid"]}` : "";

  let content = (
    <form>
      <div className={classes["delivery__form"]}>
        <div className={classes["delivery__form-container"]}>
          <div className={classes["delivery__form-control"]}>
          <label htmlFor="name">Name</label>
            <input type="text" id="name" value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} className={nameInputClasses} />
          </div>
          <div className={classes["delivery__form-control"]}>
            <label htmlFor="number">Number</label>
            <input type="text" id="number" value={enteredNumber} onChange={numberChangeHandler} onBlur={numberBlurHandler} className={numberInputClasses} />
          </div>
          <div className={classes["delivery__form-control"]}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} className={emailInputClasses} />
          </div>
          <div className={classes["delivery__form-control"]}>
            <label htmlFor="house">House Number</label>
            <input type="text" id="house" value={enteredHouse} onChange={houseChangeHandler} onBlur={houseBlurHandler} className={houseInputClasses} />
          </div>
          <div className={classes["delivery__form-control"]}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" value={enteredStreet} onChange={streetChangeHandler} onBlur={streetBlurHandler} className={streetInputClasses} />
          </div>
          <div className={classes["delivery__form-control"]}>
            <label htmlFor="postcode">Postcode</label>
            <input type="text" id="postcode" value={enteredPostcode} onChange={postcodeChangeHandler} onBlur={postcodeBlurHandler} className={postcodeInputClasses} />
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
