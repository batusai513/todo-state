import React, { Component } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { MapToProps as Filter} from "./components/Filter";
import ToggleAll from "./components/ToggleAll";
import { arrayByFilter } from "./libs/utils";
import { FilterConsumer } from "./components/FilterContext";

const filters = ["All", "Active", "Completed"];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
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

  toggleAll = isDone => {
    this.setState({
      todos: this.state.todos.map(todo => Object.assign({}, todo, { isDone }))
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
      <FilterConsumer>
        {context => (
          <section className="todoapp">
            <Header addTodo={this.addTodo} />
            <section className="main">
              <ToggleAll toggleAll={this.toggleAll} />
              <TodoList
                list={arrayByFilter(context.activeFilter, todos)}
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
                    <Filter text={filter} />
                  </li>
                ))}
              </ul>
              <button className="clear-completed" />
            </footer>
          </section>
        )}
      </FilterConsumer>
    );
  }
}
