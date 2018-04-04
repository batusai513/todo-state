import React from "react";
import PropTypes from "prop-types";
import { TodosConsumer } from "./TodosContext";

export default class Todo extends React.PureComponent {
  render() {
    const { id, text, isDone, toggleTodoDone, deleteTodo } = this.props;
    return (
      <div className={`${isDone ? "completed" : ""}`}>
        <div className="view">
          <input
            checked={isDone}
            onChange={() => toggleTodoDone(id)}
            className="toggle"
            type="checkbox"
          />
          <label>{text}</label>
          <button onClick={() => deleteTodo(id)} className="destroy" />
        </div>
        <input className="edit" defaultValue="Create a TodoMVC template" />
      </div>
    );
  }
}

export function TodoContainer(props) {
  return (
    <TodosConsumer>
      {({ toggleTodoDone, deleteTodo }) => (
        <Todo
          {...props}
          toggleTodoDone={toggleTodoDone}
          deleteTodo={deleteTodo}
        />
      )}
    </TodosConsumer>
  );
}

Todo.displayName = "Todo";

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  toggleTodoDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};
