import React, { Component } from "react";
import { MapToProps as Header } from "./components/Header";
import { MapToProps as TodoList } from "./components/TodoList";
import { MapToProps as Filter } from "./components/Filter";
import ToggleAll from "./components/ToggleAll";

const filters = ["All", "Active", "Completed"];

export default class App extends React.Component {
  render() {
    return (
      <section className="todoapp">
        <Header />
        <section className="main">
          <ToggleAll toggleAll={this.toggleAll} />
          <TodoList />
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>{0}</strong> item left
          </span>
          <ul className="filters">
            {filters.map(filter => (
              <li key={filter}>
                <Filter text={filter} />
              </li>
            ))}
          </ul>
          <button className="clear-completed" />
        </footer>
      </section>
    );
  }
}
