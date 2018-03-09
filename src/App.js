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
    visibleTodos: [],
    visibilityFilter: "all", // completed, active
    leftItems: 0,
    toggleTodos: false
  };

  addTodo = text => {
    this.setState({
      todoList: this.state.todoList.concat(todoFactory(text)),
      visibleTodos: this.state.todoList.concat(todoFactory(text))
    }, () => {
      this.updateLeftItems(this.state.todoList.length);
    });
  };

  toggleTodoActive = id => {
    var todoList = this.state.todoList;
    var list = todoList.map(todo => {
      if (todo.id === id) {
        return Object.assign({}, todo, { active: !todo.active });
      }
      return todo;
    })
    this.setState({
      todoList: list,
      visibleTodos: list
    });
  };

  updateLeftItems = (length) => {
    this.setState({
      leftItems: length
    });
  }

  setVisibilityFilter = (ref) => {
    if (ref === 'all'){
      this.setState({
        visibleTodos: this.state.todoList
      });
    }else if (ref === 'completed'){
      this.setState({
        visibleTodos: this.state.todoList.filter(todo => todo.active === true )
      });

    }else if (ref === 'active'){
      this.setState({
        visibleTodos: this.state.todoList.filter(todo => todo.active === false )
      });
    }
  }

  render() {
    return (
      <section className="todoapp">
        <Header onAddTodo={this.addTodo} updateLeftItems={this.updateLeftItems} />
        <Body list={this.state.visibleTodos} onToggleTodo={this.toggleTodoActive} />
        <Footer leftItems={this.state.leftItems} setVisibilityFilter={this.setVisibilityFilter} />
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
