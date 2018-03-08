import React from "react";
import P from "prop-types";

export default function Body(props) {
  var list = props.list;
  var onToggleTodo = props.onToggleTodo;
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {list.map(todo => {
          return (
            <li key={todo.id} className={todo.active === true ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.active}
                  onChange={onActiveChange(todo.id)}
                />
                <label>{todo.text}</label>
                <button className="destroy" />
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
}

Body.propTypes = {
  list: P.array.isRequired,
  onToggleTodo: P.func.isRequired
};
