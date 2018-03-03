import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTodo, toggleTodoDone } from '../modules/todos';

function Todo({ text, isDone, toggleTodoDone, deleteTodo, id }) {
  function onChangeDone() {
    toggleTodoDone(id);
  };

  function onDeleteTodo() {
    deleteTodo(id);
  };
  return (
    <div className={`${isDone ? 'completed' : ''}`}>
      <div className="view">
        <input
          checked={isDone}
          onChange={onChangeDone}
          className="toggle"
          type="checkbox"
        />
        <label>{text}</label>
        <button onClick={onDeleteTodo} className="destroy" />
      </div>
      <input className="edit" defaultValue="Create a TodoMVC template" />
    </div>
  );
}

export default connect(null, {
  toggleTodoDone,
  deleteTodo: removeTodo,
})(Todo);

Todo.displayName = 'Todo';

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  toggleTodoDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
