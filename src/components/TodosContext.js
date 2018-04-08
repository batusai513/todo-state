import React, { Component, createContext } from "react";

var TodosContext = createContext();

export class TodosProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      addTodo: this.addTodo,
      toggleTodoDone: this.toggleTodoDone,
      deleteTodo: this.deleteTodo,
      leftTodos: this.leftTodos
    };
  }

  addTodo = text => {
    this.setState(state => ({
      todos: state.todos.concat([{ text, id: Date.now(), isDone: false }])
    }));
  };

  toggleTodoDone = id => {
    var { todos } = this.state;
    var newTodos = todos.map(
      (todo) =>
        todo.id == id ? Object.assign({}, todo, { isDone: !todo.isDone }) : todo
    );
    this.setState(state => ({ todos: newTodos })); // updated function
  };

  deleteTodo = id => {
    var todos = this.state.todos;
    var newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState(state => ({ todos: newTodos }));
  };

  remainingTodos = () => {
    return this.state.todos.filter(todo => !todo.isDone);
  }

  leftTodos = () => {
    return this.remainingTodos().length;
  }

  render() {
    return (
      <TodosContext.Provider
        value={this.state}
      >
        {this.props.children}
      </TodosContext.Provider>
    );
  }
}

export const TodosConsumer = TodosContext.Consumer;
