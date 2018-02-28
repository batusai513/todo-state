import React from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";

function Todo({ text, isDone, toggleTodoDone, deleteTodo }) {
  return (
    <li className={`${isDone ? "completed" : ""}`}>
      <div className="view">
        <input
          checked={isDone}
          onChange={toggleTodoDone}
          className="toggle"
          type="checkbox"
        />
        <label>{text}</label>
        <button onClick={deleteTodo} className="destroy" />
      </div>
      <input className="edit" value="Create a TodoMVC template" />
    </li>
  );
}

export default inject(
  (_, props) => ({
    deleteTodo: props.todo.removeTodo,
    text: props.todo.text,
    isDone: props.todo.isDone,
    toggleTodoDone: props.todo.toggleIsDone
  })
)(observer(Todo));

Todo.displayName = "Todo";

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  toggleTodoDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};
