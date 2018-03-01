import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

export default function TodoList({ list, toggleTodoDone, deleteTodo }) {
  return (
    <ul className="todo-list">
      {renderList(list)}
    </ul>
  );

  function renderList(list) {
    return list.map((todo, idx) => (
      <li key={todo.text} className={`${todo.isDone ? "completed" : ""}`}>
        <Todo
          deleteTodo={function() {
            deleteTodo(idx);
          }}
          toggleTodoDone={function() {
            toggleTodoDone(idx);
          }}
          text={todo.text}
          isDone={todo.isDone}
        />
      </li>
    ));
  }
}

TodoList.displayName = "TodoList";

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
  toggleTodoDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};
