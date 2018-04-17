import React from "react";
import P from "prop-types";
import { TodoType } from "../libs/propTypes";
import { TodosConsumer } from "./TodosContext";
import { FilterConsumer } from "./FilterContext";
import { arrayByFilter } from "../libs/utils";

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
              <button
                className="destroy"
                onClick={() => props.onDeleteTodo(item.id)}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function MapToProps(props) {
  return (
    <TodosConsumer>
      {({ todos, toggleTodo, onDeleteTodo }) => (
        <FilterConsumer>
          {({ activeFilter }) => (
            <TodoList
              list={arrayByFilter(activeFilter, todos)}
              onToggleTodo={toggleTodo}
              onDeleteTodo={onDeleteTodo}
            />
          )}
        </FilterConsumer>
      )}
    </TodosConsumer>
  );
}

TodoList.propTypes = {
  list: P.array,
  onToggleTodo: P.func.isRequired,
  onDeleteTodo: P.func.isRequired
};

TodoList.defaultProps = {
  list: []
};
