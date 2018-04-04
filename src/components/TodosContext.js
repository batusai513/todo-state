import React, { Component, createContext } from "react";

var TodosContext = createContext();

export class TodosProvider extends Component {
  state = {
    todos: []
  };

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

  get remainingTodos() {
    return this.state.todos.filter(todo => !todo.isDone);
  }

  get leftTodos() {
    return this.remainingTodos.length;
  }

  render() {
    return (
      <TodosContext.Provider
        value={{
          state: this.state,
          addTodo: this.addTodo,
          toggleTodoDone: this.toggleTodoDone,
          deleteTodo: this.deleteTodo,
          leftTodos: this.leftTodos
        }}
      >
        {this.props.children}
      </TodosContext.Provider>
    );
  }
}

export const TodosConsumer = TodosContext.Consumer;
