import React from "react";
import { observer, inject } from 'mobx-react';

function TodoHeader({ onAddTodo }) {
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
    var text = input.value;
    onAddTodo(text);
    input.value = '';
    e.preventDefault();
  }
}

//usando provider, si no hay inject, no hay store en el observer
export default inject(stores => ({
  onAddTodo: stores.store.addTodo,
}))(observer(TodoHeader));