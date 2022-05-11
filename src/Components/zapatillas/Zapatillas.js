import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "../../index.css";
export const Zapatillas = ({
  brand,
  model,
  imageUrl,
  increment,
  decrement,
}) => {
  const {
    state: estado,
    increment: incrementar,
    decrement: decrementar,
  } = useCounter();
  const handleAdd = () => {
    // increment();
    incrementar();
  };

  const handleLessOne = () => {
    // decrement();
    decrementar();
  };

  return (
    <>
      <div className="shoes">
        <h2> {brand}</h2>
        <img name={model} src={imageUrl} alt={model}></img>
        <p>{estado}</p>
        <div className="d-flex">
          <button className="btn btn-primary col-6" onClick={handleAdd}>
            {" "}
            +
          </button>

          {
            <button className="btn btn-info col-6" onClick={handleLessOne}>
              {" "}
              -
            </button>
          }
        </div>
      </div>
    </>
  );
};
