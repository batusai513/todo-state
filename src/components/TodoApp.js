import React, { Component } from "react";
import DevTools from 'mobx-react-devtools';
import AllCompleted from './AllCompleted';
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

export default class TodoApp extends Component {
  render() {
    return (
      <section className="todoapp">
        <TodoHeader />
        <section className="main">
          <AllCompleted />
          <TodoList />
        </section>
        <TodoFooter />
        <DevTools />
      </section>
    );
  }
}
