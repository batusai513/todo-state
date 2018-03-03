import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Todo from "./Todo";

function TodoList({ list }) {
  return (
    <ul className="todo-list">
      {renderList(list)}
    </ul>
  );

  function renderList(list) {
    return list.map((todo) => (
      <li key={todo.id} >
        <Todo
          id={todo.id}
          text={todo.text}
          isDone={todo.isDone}
        />
      </li>
    ));
  }
}

export default connect(mapStateToProps)(TodoList);

function mapStateToProps(state) {
  const { todos, selectedFilter } = state;
  return {
    list: getFilteredList(todos, selectedFilter),
  }
}

function getFilteredList(list, filter) {
  switch (filter) {
    case 'active':
      return list.filter(item => !item.isDone);
    case 'completed':
      return list.filter(item => item.isDone);
    default:
      return list;
  }
}

TodoList.displayName = "TodoList";

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
};
