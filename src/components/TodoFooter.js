import React from "react";
import TodoFilter from "./TodoFilter";
import TodoCount from './TodoCount';
import ClearTodos from './ClearTodos';

export default function TodoFooter() {
  return (
    <footer className="footer">
      <TodoCount />
      <ul className="filters">
        <li>
          <TodoFilter
            type="all"
            url="#/"
          >
            All
          </TodoFilter>
        </li>
        <li>
          <TodoFilter
            type="active"
            url="#/active"
          >
            Active
          </TodoFilter>
        </li>
        <li>
          <TodoFilter
            type="completed"
            url="#/completed"
          >
            Completed
          </TodoFilter>
        </li>
      </ul>
      <ClearTodos />
    </footer>
  );
}

TodoFooter.propTypes = {};
