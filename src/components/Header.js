import React from "react";
import P from "prop-types";

const ENTER_KEY = 13;

export default function Header(props) {
  var onAddTodo = props.onAddTodo;
  var updateLeftItems = props.updateLeftItems;
  return (
    <header className="header">
      <h1>Todos</h1>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
        onKeyDown={onKeyDown}
      />
    </header>
  );

  function onKeyDown(e) {
    var keyCode = e.keyCode;
    var text = e.target.value;
    if (keyCode === ENTER_KEY) {
      onAddTodo(text);
      e.target.value = "";
    }
  }
}

Header.propTypes = {
  onAddTodo: P.func.isRequired,
  updateLeftItems: P.func.isRequired
};
