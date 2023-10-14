import React, { forwardRef, useImperativeHandle } from "react";
import classes from "./OrderPaymentForm.module.css";
import useInput from "../hooks/use-input";

const OrderPaymentForm = forwardRef((props, ref) => {
  const {
    value: enteredNumber,
    isValid: enteredNumberIsValid,
    hasError: numberInputHasError,
    inputChangeHandler: numberChangeHandler,
    inputBlurHandler: numberBlurHandler,
    inputSubmitHandler: numberSubmitHandler,
    resetInput: resetNumberInput
  } = useInput(value => value.trim().length > 14 && value.trim().length < 17)

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
    value: enteredDate,
    isValid: enteredDateIsValid,
    hasError: dateInputHasError,
    inputChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    inputSubmitHandler: dateSubmitHandler,
    resetInput: resetDateInput
  } = useInput(value => value.trim() !== "")

  const {
    value: enteredSecurity,
    isValid: enteredSecurityIsValid,
    hasError: securityInputHasError,
    inputChangeHandler: securityChangeHandler,
    inputBlurHandler: securityBlurHandler,
    inputSubmitHandler: securitySubmitHandler,
    resetInput: resetSecurityInput
  } = useInput(value => value.trim().length > 2 && value.trim().length < 5)

  let formIsValid;

  if (enteredNameIsValid && enteredNumberIsValid && enteredDateIsValid && enteredSecurityIsValid) {
    formIsValid = true;
  }

  const orderPayment = {
    cardName: enteredName,
    cardNumber: enteredNumber,
    expiryDate: enteredDate,
    securityNumber: enteredSecurity,
    validPaymentDetails: formIsValid
  }

  props.onSavePaymentData(orderPayment);

  useImperativeHandle(ref, () => ({
    formSubmitHandler() {
      numberSubmitHandler();
      nameSubmitHandler();
      dateSubmitHandler();
      securitySubmitHandler();
    },

    formResetHandler() {
      resetNumberInput();
      resetNameInput();
      resetDateInput();
      resetSecurityInput();
    }
  }))

  const numberInputClasses = numberInputHasError ? `${classes["payment__form-invalid"]}` : "";
  const nameInputClasses = nameInputHasError ? `${classes["payment__form-invalid"]}` : "";
  const dateInputClasses = dateInputHasError ? `${classes["payment__form-invalid"]}` : "";
  const securityInputClasses = securityInputHasError ? `${classes["payment__form-invalid"]}` : "";

  const currentMonth = ((new Date()).getMonth() + 1);
  const currentYear = ((new Date()).getFullYear());

  let content = (
    <form>
      <div className={classes["payment__form"]}>
        <div className={classes["payment__form-container"]}>
          <div className={classes["payment__form-control"]}>
            <label htmlFor="number">Card Number</label>
            <input type="text" id="number" value={enteredNumber} onChange={numberChangeHandler} onBlur={numberBlurHandler} className={numberInputClasses} />
          </div>
          <div className={classes["payment__form-control"]}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} className={nameInputClasses} />
          </div>
          <div className={classes["payment__form-control"]}>
            <label htmlFor="expiry">Expiry Date</label>
            <input type="month" id="expiry" value={enteredDate} min={`${currentYear}-${currentMonth}`} onChange={dateChangeHandler} onBlur={dateBlurHandler} className={dateInputClasses} />
          </div>
          <div className={classes["payment__form-control"]}>
            <label htmlFor="security">Security Number</label>
            <input type="text" id="security" value={enteredSecurity} onChange={securityChangeHandler} onBlur={securityBlurHandler} className={securityInputClasses} />
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
})

export default OrderPaymentForm;
