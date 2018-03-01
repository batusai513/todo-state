import React from "react";

export default function TodoHeader({
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
    onAddTodo({
      text: value,
      isDone: false
    });
    input.value = '';
    e.preventDefault();
  }
}
