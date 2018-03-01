import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import TodoFilter from "./TodoFilter";

function TodoFooter({ leftTodos }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftTodos}</strong> item left
      </span>
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
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default inject(({ store }) => ({
  leftTodos: store.leftTodos,
}))(observer(TodoFooter));

TodoFooter.propTypes = {
  leftTodos: PropTypes.number.isRequired,
};
