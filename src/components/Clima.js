import React from "react";
import PropTypes from "prop-types";

export const Clima = ({ resultado }) => {
  //Extraer los valores
  const { name, main } = resultado;
  //Esto previene que se ejecute el componente,
  // Porque en la primera interacción no hay ningun
  //dato ingresado o.o
  if (!name) return null;
  const kelvin = 273.15;
  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} es:</h2>
        <p className="temperatura">
          {parseInt(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
        </p>
        <p>
          Temperatura máxima:
          {parseInt(main.temp_max - kelvin, 10).toFixed(2)}{" "}
          <span>&#x2103;</span>
        </p>
        <p>
          Temperatura minima:
          {parseInt(main.temp_min - kelvin, 10).toFixed(2)}{" "}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};
