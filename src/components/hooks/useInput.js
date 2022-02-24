import { useState } from "react";
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);
  const isEnteredValueValid = validateValue(enteredValue);
  const inputHasErrors = isInputTouched && !isEnteredValueValid;
  const isInputValid = isInputTouched && isEnteredValueValid;
  const onChangeInputHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const onBlurInputHandler = () => {
    setIsInputTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsInputTouched(false);
  };
  return {
    value: enteredValue,
    onChangeInputHandler,
    onBlurInputHandler,
    reset,
    isInputValid,
    inputHasErrors,
  };
};

export default useInput;
