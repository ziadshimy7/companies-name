import React from "react";
import styles from "./Button.module.css";
const Button = ({ children, onClickHandler, btnDisabled }) => {
  return (
    <button
      disabled={btnDisabled}
      onClick={onClickHandler}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
