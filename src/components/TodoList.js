import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Todo from "./Todo";
import { removeTodo, toggleTodoDone } from '../modules/todos';

function TodoList({ list, toggleTodoDone, deleteTodo }) {
  return (
    <ul className="todo-list">
      {renderList(list)}
    </ul>
  );

  function renderList(list) {
    return list.map((todo, idx) => (
      <li key={todo.id} >
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

export default connect(mapStateToProps, {
  toggleTodoDone,
  deleteTodo: removeTodo
})(TodoList);

function mapStateToProps(state) {
  return {
    list: state.todos,
  }
}

TodoList.displayName = "TodoList";

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
  toggleTodoDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};
