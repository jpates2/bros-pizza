import { useState } from "react";

const useInput = (validateInput) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateInput(enteredInput);
  const hasError = !inputIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  }

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  }

  const resetInput = () => {
    setEnteredInput("");
    setIsTouched(false);
  }

  return {
    value: enteredInput,
    isValid: inputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    resetInput
  }
}

export default useInput;
