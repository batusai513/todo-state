import React from "react";
import P from "prop-types";
import { VisibilityFilterConsumer } from "./VisibilityFilterContext";

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

export default function Filter({ text }) {
  return (
    <VisibilityFilterConsumer>
      {function(value) { // Render props
        return (
          <a
            className={value.visibilityFilter === text ? "selected" : ""}
            onClick={() => value.changeVisibilityFilter(text)}
          >
            {text}
          </a>
        );
      }}
    </VisibilityFilterConsumer>
  );
}

Filter.propTypes = {
  text: P.string
};
