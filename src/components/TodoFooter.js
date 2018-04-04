import React from "react";
import PropTypes from "prop-types";
import { Filter as TodoFilter} from "./TodoFilter";
import LeftTodos from "./LeftTodos";

export default function TodoFooter() {
  return (
    <footer className="footer">
      <LeftTodos />
      <ul className="filters">
        <li>
          <TodoFilter type="all" url="#/">
            All
          </TodoFilter>
        </li>
        <li>
          <TodoFilter type="active" url="#/active">
            Active
          </TodoFilter>
        </li>
        <li>
          <TodoFilter type="completed" url="#/completed">
            Completed
          </TodoFilter>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}
