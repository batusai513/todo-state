import React, { Component, createElement } from "react";
import Header from "./components/Header"; // default y named
import Body from "./components/Body";
import Footer from "./components/Footer";

function todoFactory(text) {
  return {
    text,
    active: false,
    id: Date.now()
  };
}

/*
  arr.filter(item => true )
*/

export default class App extends React.Component {
  state = {
    todoList: [],
    visibilityFilter: "all", // completed, active
    leftItems: 0,
    toggleTodos: false
  };

  addTodo = text => {
    this.setState({
      todoList: this.state.todoList.concat(todoFactory(text))
    });
  };

  toggleTodoActive = id => {
    var todoList = this.state.todoList;
    this.setState({
      todoList: todoList.map(todo => {
        if (todo.id === id) {
          return Object.assign({}, todo, { active: !todo.active });
        }
        return todo;
      })
    });
  };

  render() {
    return (
      <section className="todoapp">
        <Header onAddTodo={this.addTodo} />
        <Body list={this.state.todoList} onToggleTodo={this.toggleTodoActive} />
        <Footer />
      </section>
    );
  }
}

/*{
  todoList: [],
  todo: {
    active: false,
    text: "",
    id: ""
  },
  visibilityFilter: 'all',
  leftItems: 0,
  toggleTodos: false
}*/
