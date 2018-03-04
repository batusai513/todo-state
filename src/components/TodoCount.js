import React from 'react';
import { Subscribe } from 'unstated';
import TodosContainer from '../modules/TodosContainer';

function TodoCount({ leftTodos }) {
  return (
    <span className="todo-count">
      <strong>{leftTodos}</strong> item left
    </span>
  );
}

export default function TodoCountContainer() {
  return (
    <Subscribe to={[TodosContainer]}>
      {
        ({ leftTodosCount }) => (
          <TodoCount leftTodos={leftTodosCount()} />
        )
      }
    </Subscribe>
  )
}