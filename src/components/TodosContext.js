import React, { createContext } from "react";

var TodosContext = createContext();

export class TodosProvider extends React.Component {
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

  state = {
    todos: [],
    addTodo: this.addTodo,
    toggleTodo: this.toggleTodo,
    onDeleteTodo: this.onDeleteTodo,
    toggleAll: this.toggleAll,
    leftTodos: this.leftTodos
  };

  render() {
    return (
      <TodosContext.Provider value={this.state}>
        {this.props.children}
      </TodosContext.Provider>
    );
  }
}

export const TodosConsumer = TodosContext.Consumer;
