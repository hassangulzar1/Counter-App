import React, { useState } from "react";
import Button from "../../UI/Button";
import "./Box.css";

const Box = () => {
  const [currValue, setCurrValue] = useState(0);

  const CheckingIncOrDec = (v) => {
    if (v === "increment") {
      setCurrValue((prevValue) => prevValue + 1);
    } else if (v === "decrement") {
      setCurrValue((prevValue) => prevValue - 1);
    } else {
      setCurrValue(0);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center box">
        <Button value="increment" color="bg-green" clicking={CheckingIncOrDec}>
          Increment
        </Button>

        <h2 className=" mx-5 fs-1">{currValue}</h2>

        <Button value="decrement" color="bg-orange" clicking={CheckingIncOrDec}>
          Decrement
        </Button>
      </div>

      <div className="text-center mt-5">
        <Button value="reset" color="bg-red" clicking={CheckingIncOrDec}>
          Reset
        </Button>
      </div>
    </>
  );
};

export default Box;
