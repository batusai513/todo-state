import React from "react";
import PropTypes from "prop-types";
import { TodoContainer as Todo } from "./Todo";
import { TodosConsumer } from "./TodosContext";
import { FilterConsumer } from "./FilterContext";
import { getFilteredList } from "../utils";

export default class TodoList extends React.PureComponent {
  render() {
    const { list } = this.props;
    return <ul className="todo-list">{renderList(list)}</ul>;
  }
}

function renderList(list) {
  return list.map(todo => (
    <li key={todo.id}>
      <Todo id={todo.id } text={todo.text} isDone={todo.isDone} />
    </li>
  ));
}

export function Todos() {
  return (
    <TodosConsumer>
      {({ state: { todos: list } }) => (
        <FilterConsumer>
          {({ state: { selectedFilter } }) => (
            <TodoList list={getFilteredList(list, selectedFilter)} />
          )}
        </FilterConsumer>
      )}
    </TodosConsumer>
  );
}

TodoList.displayName = "TodoList";

TodoList.propTypes = {
  list: PropTypes.array.isRequired
};
