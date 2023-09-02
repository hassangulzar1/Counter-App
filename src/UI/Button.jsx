import React, { useState } from "react";
import Styles from "./Button.module.css";
const Button = (props) => {
  const [incOrDec, setIncOrDec] = useState("");

  const buttonClickHandler = (e) => {
    setIncOrDec(e.target.value);
    props.clicking(incOrDec);
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
