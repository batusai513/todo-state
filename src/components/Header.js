import React from "react";
import P from "prop-types";

export default function Header(props) {
  var element;
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onAddTodo}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus=""
          ref={el => (element = el)}
        />
      </form>
    </header>
  );

  function onAddTodo(e) {
    e.preventDefault();
    var value = element.value;
    props.addTodo(value);
    element.value = "";
  }
}

Header.propTypes = {
  addTodo: P.func.isRequired
};
