import React from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import { useModal } from "../../../contexts/ModalContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import useInput from "../../hooks/useInput";
const FormModal = ({ handleSubmit }) => {
  let formIsValid;
  const {
    value: companyNameValue,
    onChangeInputHandler: onCompanyNameChangeHandler,
    onBlurInputHandler: onCompanyNameBlurHandler,
    isInputValid: isCompanyNameValid,
    reset: resetCompanyNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: companyAddressValue,
    onChangeInputHandler: onCompanyAddressChangeHandler,
    onBlurInputHandler: onCompanyAddressBlurHandler,
    isInputValid: isCompanyAddressValid,
    reset: resetCompanyAddressInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: registrationNumberValue,
    onChangeInputHandler: onRegistrationNumChangeHandler,
    onBlurInputHandler: onRegisterationNumBlurHandler,
    isInputValid: isRegistrationNumValid,
    reset: resetRegistrationNumInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: taxNumValue,
    onChangeInputHandler: onTaxNumChangeHandler,
    onBlurInputHandler: onTaxNumBlurHandler,
    isInputValid: isTaxNumValid,
    reset: resetTaxNumInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: dateValue,
    onChangeInputHandler: onDateChangeHandler,
    onBlurInputHandler: onDateBlurHandler,
    reset: resetDateInput,
  } = useInput((value) => value.trim() !== "");
  formIsValid =
    isCompanyAddressValid &&
    isCompanyNameValid &&
    isRegistrationNumValid &&
    isTaxNumValid;
  const { setToggleModal } = useModal();
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    handleSubmit({
      id: new Date().getTime(),
      editMode: false,
      name: companyNameValue,
      address: companyAddressValue,
      registrationNumber: registrationNumberValue,
      taxNumber: taxNumValue,
      date: dateValue,
    });
    resetCompanyAddressInput();
    resetCompanyNameInput();
    resetTaxNumInput();
    resetDateInput();
    resetRegistrationNumInput();
    setToggleModal(false);
  };
  return (
    <>
      <Backdrop
        onClickHandler={() => {
          setToggleModal(false);
        }}
      />
      <div className={styles["modal__container"]}>
        <form onSubmit={onFormSubmitHandler}>
          <AiOutlineCloseCircle
            size={25}
            onClick={() => {
              setToggleModal(false);
            }}
            className={styles["close__icon"]}
          />
          <label htmlFor="companyName">Введите название компании</label>
          <input
            onChange={onCompanyNameChangeHandler}
            onBlur={onCompanyNameBlurHandler}
            value={companyNameValue}
            required
            placeholder="наименование"
            name="companyName"
            type="text"
          />
          <label htmlFor="companyAddress">Введите адрес компании</label>
          <input
            onChange={onCompanyAddressChangeHandler}
            onBlur={onCompanyAddressBlurHandler}
            value={companyAddressValue}
            required
            placeholder="адрес"
            name="companyAddress"
            type="text"
          />
          <label htmlFor="registrationNumber">Введите огрн</label>
          <input
            onChange={onRegistrationNumChangeHandler}
            onBlur={onRegisterationNumBlurHandler}
            value={registrationNumberValue}
            type="number"
            placeholder="огрн"
            name="registrationNumber"
          />
          <label htmlFor="taxNumber">Введите инн</label>
          <input
            onChange={onTaxNumChangeHandler}
            onBlur={onTaxNumBlurHandler}
            value={taxNumValue}
            type="number"
            placeholder="инн"
            name="taxNumber"
          />
          <label htmlFor="date">дата регистрации</label>
          <input
            onChange={onDateChangeHandler}
            onBlur={onDateBlurHandler}
            value={dateValue}
            type="date"
            placeholder="дата регистрации"
            name="date"
          />
          <button
            type="submit"
            disabled={!formIsValid}
            className={styles["form__btn"]}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default FormModal;
