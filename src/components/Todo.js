import React from "react";
import PropTypes from "prop-types";

export default function Todo(
  {
    text,
    isDone,
    toggleTodoDone,
    deleteTodo
  }
) {
  return (
    <div>
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
      <input className="edit" defaultValue="Create a TodoMVC template" />
    </div>
  );
}

Todo.displayName = "Todo";

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  toggleTodoDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};
