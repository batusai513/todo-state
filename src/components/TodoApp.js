import React, { Component } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import data from "./todoData";

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

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: data || [],
      selectedFilter: 'all'
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodoDone = this.toggleTodoDone.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  }

  addTodo(todo) {
    this.setState(state => ({ todos: state.todos.concat([todo]) }));
  }

  toggleTodoDone(idx) {
    var { todos } = this.state;
    var todo = todos[idx];
    var newTodos = [
      ...todos.slice(0, idx),
      Object.assign({}, todo, { isDone: !todo.isDone }),
      ...todos.slice(idx + 1)
    ];
    this.setState(state => ({ todos: newTodos })); // updated function
  }

  changeFilter(filter) {
    this.setState(state => ({ selectedFilter: filter }));
  }

  deleteTodo(idx) {
    var todos = this.state.todos;
    var newTodos = todos.filter((todo, todoIdx) => {
      return todoIdx !== idx;
    });
    this.setState(state => ({ todos: newTodos }));
  }

  render() {
    var { todos, selectedFilter } = this.state;
    var filteredTodos = getFilteredList(todos, selectedFilter);
    var leftTodos = todos.filter(todo => !todo.isDone).length;
    return (
      <section className="todoapp">
        <TodoHeader />
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList />
        </section>
        <TodoFooter
          changeFilter={this.changeFilter}
          selectedFilter={selectedFilter}
        />
      </section>
    );
  }
}
