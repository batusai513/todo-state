import React, { Component } from "react";


//Crear componente como funcion (las propiedades llegan como parametros de la funcion)
// export default function App() {
//   return React.createElement(
//     "div",
//     null,
//     React.createElement("h1", null, Hola)
//   );
// }


//Crear componente como clase (las propiedades estan en this.props);
export default class App extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("h1", null, 'Hola')
    );
  }
}
