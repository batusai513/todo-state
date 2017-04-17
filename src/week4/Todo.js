import React from "react";
import PropTypes from "prop-types";

export default function Todo(
  {
    text
  }
) {
  return (
    <div>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{text}</label>
        <button className="destroy" />
      </div>
      <input className="edit" value="Create a TodoMVC template" />
    </div>
  );
}

Todo.displayName = "Todo";

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired
};
