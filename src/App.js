import React, { Component, createElement } from "react";

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
    return createElement(
      "div",
      { className: "main-box", style: { backgroundColor: 'aquamarine' } },
      createElement("h1", { className: "title" }, "Hola"),
      ['hola', 'adios'],
      null,
      false,
      //{} no puedes pasar objetos o undefined
      createElement('input', { type: 'text', autoFocus: true })
    );
  }
}
