import React from "react";
import P from "prop-types";

export default function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.list.map(item => {
        return (
          <li key={item.id} className={item.isDone === true ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={item.isDone}
                onChange={() => props.onToggleTodo(item.id)}
              />
              <label>{item.text}</label>
              <button className="destroy" />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  list: P.array,
  onToggleTodo: P.func.isRequired
};

TodoList.defaultProps = {
  list: []
};
