import React from 'react';
import { Subscribe } from 'unstated';
import TodosContainer from '../modules/TodosContainer';

function ClearTodos({ clearTodos }) {
  return (
    <button className="clear-completed" onClick={clearTodos}>
      Clear completed
    </button>
  );
}

export default function ClearTodosContainer() {
  return (
    <Subscribe to={[TodosContainer]}>
      {Todos => <ClearTodos clearTodos={Todos.clearCompleted} />}
    </Subscribe>
  );
}
