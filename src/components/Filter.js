import React from "react";
import P from "prop-types";

/*
Object deconstruction
var obj = {
  nombre: "Marcela",
  apellido: "Garizao"
}
var nombre = obj.nombre;
var { nombre: name, apellido: lastName } = obj;

Array Deconstruction;

var arr = ["Marcela", "garizao"];
var [ nombre, apellido ] = arr;

*/


export default function Filter({ visibilityFilter, text, onClick }) {
  return (
    <a className={visibilityFilter ===  text ? 'selected' : ''} onClick={() => onClick(text)}>
      {text}
    </a>
  );
}

Filter.propTypes = {
  visibilityFilter: P.string,
  onClick: P.func.isRequired,
  text: P.string
};
