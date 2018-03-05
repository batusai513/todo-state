import React, { Component, createElement } from "react";
import P from "prop-types";

//Crear componente como funcion (las propiedades llegan como parametros de la funcion)
function Title(props) {
  return React.createElement(props.level, null, props.title);
}

// defines que recibe un componente, que tipo y si es obligatorio mandarlo
// https://reactjs.org/docs/typechecking-with-proptypes.html
Title.propTypes = {
  title: P.string,
  level: P.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"])
};

Title.defaultProps = {
  level: "h1"
};

//Crear componente como clase (las propiedades estan en this.props);
export default class App extends React.Component {
  render() {
    return createElement(Title, { title: "hola mundo" });
  }
}
