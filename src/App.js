import React, { Component } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import { arrayByFilter } from './libs/utils';

const filters = ["All", "Active", "Completed"];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      activeFilter: "all" // || active || completed
    };
  }

  addTodo = text => {
    this.setState({
      todos: [
        { id: Date.now(), text: text, isDone: false },
        ...this.state.todos
      ]
    });
  };

  toggleTodo = id => {
    this.setState({
      todos: this.state.todos.map(
        todo =>
          todo.id == id
            ? Object.assign({}, todo, {
                isDone: !todo.isDone
              })
            : todo
      )
    });
  };

  onDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  onChangeFilter = activeFilter => {
    this.setState({
      activeFilter
    });
  };

  leftTodos(todos) {
    return todos.filter(todo => !todo.isDone).length;
  }

  render() {
    var { todos, activeFilter: filter } = this.state;
    var todosToRender = arrayByFilter(filter, todos);
    var leftTodos = this.leftTodos(todos);
    return (
      <section className="todoapp">
        <Header addTodo={this.addTodo} />
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList
            list={todosToRender}
            onToggleTodo={this.toggleTodo}
            onDeleteTodo={this.onDeleteTodo}
          />
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>{leftTodos}</strong> item left
          </span>
          <ul className="filters">
            {filters.map(filter => (
              <li key={filter}>
                <Filter
                  text={filter}
                  activeFilter={this.state.activeFilter}
                  onChangeFilter={this.onChangeFilter}
                />
              </li>
            ))}
          </ul>
          <button className="clear-completed" />
        </footer>
      </section>
    );
  }
}
