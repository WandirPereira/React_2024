import React from "react";
import PropTypes from "prop-types";
import { ReactPropTypes } from "react";

const valor = 24;

const getResultado = () => {
  return 4 + 4;
};

const getResultado2 = (a, b) => {
  return a + b;
};

const meuObjeto = {
  nome: "Wandir",
  idade: 58,
};
const message1 = "Bem vindo ao React!!!";
export const FirstApp = (props) => {
  return (
    <>
      <div className="first">
        <h1>{props.title}</h1>
        <h1>FirstApp {valor}</h1>
        <p>
          {message1} {meuObjeto.nome}
        </p>
        <p>{JSON.stringify(meuObjeto)}</p>
        <code>{JSON.stringify(meuObjeto)}</code>
        <h1>{getResultado()}</h1>
        <h1>{getResultado2(2, 3)}</h1>
      </div>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  title: "Não existe um título",
};
