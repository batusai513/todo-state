import React from "react";
import P from "prop-types";
import { TodosConsumer } from "./TodosContext";

export default function Header({ addTodo }) {
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
    addTodo(value);
    element.value = "";
  }
}

export function MapToProps(props) {
  return (
    <TodosConsumer>
      {context => <Header addTodo={context.addTodo} />}
    </TodosConsumer>
  );
}

Header.propTypes = {
  addTodo: P.func.isRequired
};
