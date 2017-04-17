import React, { Component } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import data from "./todoData";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: data || []
    };
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(todo) {
    this.setState(state => ({ todos: state.todos.concat([todo]) }));
  }
  render() {
    var { todos } = this.state;
    return (
      <section className="todoapp">
        <TodoHeader onAddTodo={this.addTodo} />
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label for="toggle-all">Mark all as complete</label>
          <TodoList list={todos} />
        </section>
        <TodoFooter />
      </section>
    );
  }
}
