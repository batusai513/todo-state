import React, { Component } from "react";
import TodoHeader from "./TodoHeader";
import { Todos as TodoList } from "./TodoList";
import TodoFooter from "./TodoFooter";
import data from "./todoData";
import { TodosConsumer } from "./TodosContext";

export default class TodoApp extends Component {
  render() {
    return (
      <section className="todoapp">
        <TodosConsumer>
          {context => <TodoHeader onAddTodo={context.addTodo} />}
        </TodosConsumer>
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
