import React, { Component, createElement } from "react";
import Header from "./components/Header"; // default y named
import Body from "./components/Body";
import Footer from "./components/Footer";

export default class App extends React.Component {
  state = {
    todoList: [],
    todo: {
      active: false,
      text: "",
      id: ""
    },
    visibilityFilter: "all",
    leftItems: 0,
    toggleTodos: false
  };

  addTodo = (text) => {
    this.setState({
      todoList: this.state.todoList.concat({ text, active: false, id: Date.now() })
    });
  }

  render() {
    return (
      <section className="todoapp">
        <Header onAddTodo={this.addTodo} />
        <Body />
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
