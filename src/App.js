import React, { Component } from 'react';
import { MapToProps as Header } from './components/Header';
import { MapToProps as TodoList } from './components/TodoList';
import { MapToProps as Filter } from './components/Filter';
import ToggleAll from './components/ToggleAll';
import Modal from './components/Modal';

const filters = ['All', 'Active', 'Completed'];

export default class App extends React.Component {
  state = {
    show: true,
  };
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ show: false });
    }, 5000);
  }
  render() {
    return (
      <section className="todoapp">
        <Modal
          action={(toggleOpen, isOpen) => (
            <a onClick={toggleOpen}>Open Modal</a>
          )}
        >
          <h1>Modal Inside</h1>
        </Modal>
        {this.state.show ? (
          <Modal>
            <h1>Otro modal</h1>
          </Modal>
        ) : null}
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
