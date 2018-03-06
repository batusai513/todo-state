import React, { Component, createElement } from "react";
import P from "prop-types";

//Crear componente como funcion (las propiedades llegan como parametros de la funcion)
// la propiedad children es especial ya que no la defines directamente en el objeto de props
// Las propiedades de un componente de react son inmutables, no se pueden mutar de manera directa
function Title(props) {
  return React.createElement(props.level, null, props.children);
}

function Header(props) {
  return (
    <header className="header">
      <h1>Todos</h1>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
      />
    </header>
  );
}

function Body(props) {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>asda232</label>
            <button className="destroy" />
          </div>
        </li>
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>1</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed" />
    </footer>
  );
}

export default class App extends React.Component {
  render() {
    return createElement(
      "section",
      { className: "todoapp" },
      createElement(Header),
      createElement(Body),
      createElement(Footer)
    );
  }
}
