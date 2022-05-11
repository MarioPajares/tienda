import React, { useEffect, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { getZapatillas } from "../../Services/Zapatos";
import { NavBar } from "../navBar/NavBar";
import { Zapatillas } from "../zapatillas/Zapatillas";

export const Tienda = () => {
  const [shoes, setshoes] = useState([{}]);

  const { state, increment, decrement } = useCounter();

  useEffect(() => {
    setshoes(getZapatillas);
  }, []);

  return (
    <>
      <NavBar contador={state} />

      <div className="tienda d-flex container justify-content-column flex-wrap  ">
        {shoes.map(({ id, brand, imageUrl, model }) => (
          <Zapatillas
            brand={brand}
            imageUrl={imageUrl}
            model={model}
            state={state}
            increment={increment}
            decrement={decrement}
            key={id}>
          </Zapatillas>
        ))}
      </div>
    </>
  );
};
