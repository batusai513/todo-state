import React from "react";
import P from "prop-types";
import { TodoConsumer } from "./TodoContext";

export default function Body({
  list,
  onToggleTodo,
  onRemoveToDo,
  onToggleTodos
}) {
  return (
    <section className="main">
      <input
        className="toggle-all"
        id="toggle-all"
        type="checkbox"
        defaultChecked={false}
        onChange={onToggleTodosHandler()}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {list.map(todo => {
          return (
            <li
              key={todo.id}
              className={todo.active === true ? "completed" : ""}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.active}
                  onChange={onActiveChange(todo.id)}
                />
                <label>{todo.text}</label>
                <button
                  className="destroy"
                  onClick={onRemoveToDoHandler(todo.id)}
                >
                  &nbsp;
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );

  function onActiveChange(id) {
    return function $onActiveChange(e) {
      onToggleTodo(id);
    };
  }

  function onRemoveToDoHandler(id) {
    return function $onRemoveToDo(e) {
      onRemoveToDo(id);
    };
  }

  function onToggleTodosHandler() {
    return function $onToggleTodos(e) {
      onToggleTodos();
    };
  }
}

Body.propTypes = {
  list: P.array.isRequired,
  onToggleTodo: P.func.isRequired,
  onRemoveToDo: P.func.isRequired,
  onToggleTodos: P.func.isRequired
};
