import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
export const CounterApp = (props) => {
  const [counter, setCounter] = useState(props.valor);

  // function handleAdd(event, counter) {
  //   setCounter(counter + 1);
  // }

  const handleAdd = () => {
    // setCounter(counter + 1);
    setCounter((c) => c + 1);
  };

  function handleSubtration(event) {
    console.log(event);
    setCounter(counter - 3);
    // setCounter(counter - 2);
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    setCounter(counter - 1);
  }

  function handleReset(event, counter) {
    setCounter(props.valor);
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2> Valor = {props.valor} </h2>
      <h2> Counter = {counter} </h2>
      <button
        onClick={
          //function (event) {console.log(event);
          // (event) => handleAdd(event)
          handleAdd
        }
      >
        +1
      </button>
      <button onClick={handleSubtration}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  valor: PropTypes.number.isRequired,
};
