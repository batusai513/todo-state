import React, { Component } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import data from "./todoData";

export default class TodoApp extends Component {
  render() {
    return (
      <section className="todoapp">
        <TodoHeader />
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList />
        </section>
        <TodoFooter />
      </section>
    );
  }
}
