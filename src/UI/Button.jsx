import React, { useState } from "react";
import Styles from "./Button.module.css";
const Button = (props) => {
  const buttonClickHandler = (e) => {
    props.clicking(e.target.value);
  };

  return (
    <button
      className={`${Styles.btn} ${Styles[props.color]}`}
      value={props.value}
      onClick={buttonClickHandler}
    >
      {props.children}
    </button>
  );
};

export default Button;
