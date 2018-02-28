import React from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import Todo from "./Todo";

function TodoList({ list }) {
  return <ul className="todo-list">{renderList(list)}</ul>;

  function renderList(list) {
    return list.map((todo, idx) => <Todo key={todo.text} todo={todo} />);
  }
}

export default inject(({ store }) => ({ list: store.todos }))(
  observer(TodoList)
);

TodoList.displayName = "TodoList";

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
  toggleTodoDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};
