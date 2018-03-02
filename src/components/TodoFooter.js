import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import TodoFilter from "./TodoFilter";

function TodoFooter({ leftTodos, selectedFilter, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftTodos}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <TodoFilter type="all" url="#/" isActive={selectedFilter === "all"}>
            All
          </TodoFilter>
        </li>
        <li>
          <TodoFilter
            type="active"
            url="#/active"
            isActive={selectedFilter === "active"}
          >
            Active
          </TodoFilter>
        </li>
        <li>
          <TodoFilter
            type="completed"
            url="#/completed"
            isActive={selectedFilter === "completed"}
          >
            Completed
          </TodoFilter>
        </li>
      </ul>
      <button onClick={clearCompleted} className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default inject(({ store }) => ({
  selectedFilter: store.selectedFilter,
  leftTodos: store.leftTodos,
  clearCompleted: store.clearCompleted,
}))(observer(TodoFooter));

TodoFooter.propTypes = {
  leftTodos: PropTypes.number.isRequired
};
