import React, { Component } from "react";

export default function App() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus=""
        />
      </header>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>asda232</label>
              <button className="destroy" />
            </div>
          </li>
        </ul>
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
