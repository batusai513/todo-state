import React from "react";
import { connect } from 'react-redux';
import { addTodo } from '../modules/todos';

function TodoHeader({
  onAddTodo
}) {
  var input = {};
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={addTodo} action="">
        <input
          ref={ref => input = ref}
          name="todoInput"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );

  function addTodo(e) {
    var value = input.value;
    onAddTodo(value);
    input.value = '';
    e.preventDefault();
  }
}

export default connect(null, {
  onAddTodo: addTodo
})(TodoHeader);
