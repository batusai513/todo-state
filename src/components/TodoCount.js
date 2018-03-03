import React from 'react';
import { connect } from 'react-redux';
import { getFilteredList } from '../modules/todos';

function TodoCount({ todosLeft }) {
  return (
    <span className="todo-count">
      <strong>{todosLeft}</strong> item left
    </span>
  );
}

export default connect(mapStateToProps)(TodoCount);

function mapStateToProps(state) {
  const { todos } = state;
  return {
    todosLeft: getFilteredList(todos, 'active').length,
  };
}
