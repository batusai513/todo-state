import React, { Component } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo = (text) => {
    this.setState({
      todos: [
        { id: Date.now(), text: text, isDone: false },
        ...this.state.todos
      ]
    });
  }

  toggleTodo = (id) => {
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
  }

  render() {
    return (
      <section className="todoapp">
        <Header addTodo={this.addTodo} />
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList
            list={this.state.todos}
            onToggleTodo={this.toggleTodo}
          />
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>1</strong> item left
          </span>
          <ul className="filters">
            <li>
              <a href="#/" className="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          <button className="clear-completed" />
        </footer>
      </section>
    );
  }
}
