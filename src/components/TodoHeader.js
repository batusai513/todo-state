import React from 'react';
import { Subscribe } from 'unstated';
import TodosContainer from '../modules/TodosContainer';

function TodoHeader({ onAddTodo }) {
  var input = {};
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={addTodo} action="">
        <input
          ref={ref => (input = ref)}
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

export default function TodoHeaderContainer() {
  return (
    <Subscribe to={[TodosContainer]}>
      {Todos => <TodoHeader onAddTodo={Todos.addTodo} />}
    </Subscribe>
  );
}
