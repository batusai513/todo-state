import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

export default function TodoList(
  {
    list
  }
) {
  return (
    <ul className="todo-list">
      {renderList(list)}
    </ul>
  );

  function renderList(list) {
    return list.map(todo => (
      <li key={todo.text} className={`${todo.isDone ? 'selected' : ''}`}>
        <Todo {...todo} />
      </li>
    ));
  }
}

TodoList.displayName = "TodoList";

TodoList.propTypes = {
  list: PropTypes.array.isRequired
};
