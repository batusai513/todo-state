import React from "react";
import PropTypes from "prop-types";
import TodoFilter from "./TodoFilter";

export default function TodoFooter({
  leftTodos,
  selectedFilter,
  changeFilter
}) {
  return (
    <footer className="footer">
      <span className="todo-count"><strong>{leftTodos}</strong> item left</span>
      <ul className="filters">
        <li>
          <TodoFilter
            type="all"
            onChangeFilter={changeFilter}
            selectedFilter={selectedFilter}
            url="#/"
          >
            All
          </TodoFilter>
        </li>
        <li>
          <TodoFilter
            type="active"
            onChangeFilter={changeFilter}
            selectedFilter={selectedFilter}
            url="#/active"
          >
            Active
          </TodoFilter>
        </li>
        <li>
          <TodoFilter
            type="completed"
            onChangeFilter={changeFilter}
            selectedFilter={selectedFilter}
            url="#/completed"
          >
            Completed
          </TodoFilter>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

TodoFooter.propTypes = {
  leftTodos: PropTypes.number.isRequired,
  selectedFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired
};
