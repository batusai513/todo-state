import React from 'react';
import PropTypes from 'prop-types';
import { Subscribe } from 'unstated';
import Todo from './Todo';
import TodosContainer from '../modules/TodosContainer';
import SelectedFilterContainer from '../modules/SelectedFilterContainer';

function TodoList({ list, toggleTodoDone, deleteTodo }) {
  return <ul className="todo-list">{renderList(list)}</ul>;

  function renderList(list) {
    return list.map((todo) => (
      <li key={todo.id}>
        <Todo
          id={todo.id}
          text={todo.text}
          isDone={todo.isDone}
          toggleTodoDone={toggleTodoDone}
          deleteTodo={deleteTodo}
        />
      </li>
    ));
  }
}

export default function TodoListContainer() {
  return (
    <Subscribe to={[TodosContainer, SelectedFilterContainer]}>
      {(Todos, SelectedFilter) => (
        <TodoList
          list={Todos.getFilteredList(
            Todos.state.todos,
            SelectedFilter.state.selectedFilter
          )}
          toggleTodoDone={Todos.toggleTodoIsDone}
          deleteTodo={Todos.removeTodo}
        />
      )}
    </Subscribe>
  );
}

TodoList.displayName = 'TodoList';

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
};
