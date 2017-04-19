import React from "react";
import PropTypes from 'prop-types';
import TodoFilter from "./TodoFilter";

export default function TodoFooter({
  leftTodos
}) {
  return (
    <footer className="footer">
      <span className="todo-count"><strong>{leftTodos}</strong> item left</span>
      <ul className="filters">
        <li>
          <TodoFilter selected url="#/">All</TodoFilter>
        </li>
        <li>
          <TodoFilter selected url="#/active">Active</TodoFilter>
        </li>
        <li>
          <TodoFilter selected url="#/completed">Completed</TodoFilter>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

TodoFooter.propTypes = {
  leftTodos: PropTypes.number.isRequired
};