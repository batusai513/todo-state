import React, { Component, createElement } from "react";
import P from "prop-types";

//Crear componente como funcion (las propiedades llegan como parametros de la funcion)
// la propiedad children es especial ya que no la defines directamente en el objeto de props
// Las propiedades de un componente de react son inmutables, no se pueden mutar de manera directa
function Title(props) {
  return React.createElement(props.level, null, props.children);
}

// defines que recibe un componente, que tipo y si es obligatorio mandarlo
// https://reactjs.org/docs/typechecking-with-proptypes.html
Title.propTypes = {
  children: P.node,
  level: P.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"])
};

Title.defaultProps = {
  level: "h1"
};

// Crear componente como clase (las propiedades estan en this.props);
// el estado del componente es almanecenado en la propiedad state, el estado solo se puede declarar en componentes tipo clase.
// Cuando se muta el estado utilizando el metodo setState, se vuelve a renderizar ese componente y el arbol de componentes que estan por debajo de este
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  // metodos del ciclo de vida: se llaman en partes claves en el ciclo de vida del componente

  componentDidMount() {
    setInterval(function() {
      this.setState({
        text: Math.random()
      });
    }.bind(this), 1000);
  }

  render() {
    return createElement(
      Title,
      {},
      React.createElement("span", null, this.state.text)
    );
  }
}
