import React from "react";
import createContext from "create-react-context";

var TodoContext = createContext();

function todoFactory(text) {
  return {
    text,
    active: false,
    id: Date.now()
  };
}

export class TodoProvider extends React.Component {
  state = {
    todoList: []
  };

  addTodo = text => {
    this.setState({
      todoList: this.state.todoList.concat(todoFactory(text))
    });
  };

  toggleTodoActive = id => {
    var todoList = this.state.todoList;
    var list = todoList.map(todo => {
      if (todo.id === id) {
        return Object.assign({}, todo, { active: !todo.active });
      }
      return todo;
    });
    this.setState({
      todoList: list
    });
  };

  onRemoveToDo = id => {
    var todoList = this.state.todoList;
    this.setState({
      todoList: todoList.filter(item => item.id !== id)
    });
  };

  clearCompleted = () => {
    var todoList = this.state.todoList;
    this.setState({
      todoList: todoList.filter(todo => todo.active === false)
    });
  };

  render() {
    return (
      <TodoContext.Provider
        value={{
          todoList: this.state.todoList,
          addTodo: this.addTodo,
          toggleTodoActive: this.toggleTodoActive,
          onRemoveToDo: this.onRemoveToDo,
          clearCompleted: this.clearCompleted
        }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

export const TodoConsumer = TodoContext.Consumer;
