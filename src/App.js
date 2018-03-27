import React, { Component, createElement } from "react";
import Header from "./components/Header"; // default y named
import Body from "./components/Body";
import Footer from "./components/Footer";

/*
  arr.filter(item => true )
*/

export default class App extends React.Component {


  getTodosbyFilter(visibilityFilter, list) {
    if (visibilityFilter === "all") {
      return list;
    } else if (visibilityFilter === "completed") {
      return list.filter(todo => todo.active === true);
    } else if (visibilityFilter === "active") {
      return list.filter(todo => todo.active === false);
    }
  }

  onToggleTodos = () => {
    var todoList = this.state.todoList;
    var toggleTodos = this.state.toggleTodos;
    var list = todoList.map(todo => {
      if (toggleTodos === false) {
        return Object.assign({}, todo, { active: true });
      } else {
        return Object.assign({}, todo, { active: false });
      }
    });
    this.setState({
      todoList: list,
      toggleTodos: !toggleTodos
    });
  };

  render() {
    var { visibilityFilter } = this.state;
    var { todoList } = this.state;
    var list = this.getTodosbyFilter(visibilityFilter, todoList);
    return (
      <section className="todoapp">
        <Header
          onAddTodo={this.addTodo}
          updateLeftItems={this.updateLeftItems}
        />
        <Body
          list={list}
          onToggleTodo={this.toggleTodoActive}
          onRemoveToDo={this.onRemoveToDo}
          onToggleTodos={this.onToggleTodos}
        />
        <Footer
          leftItems={this.getTodosbyFilter("active", todoList).length}
          clearCompleted={this.clearCompleted}
          toggleClearCompleted={
            this.getTodosbyFilter("completed", todoList).length > 0
              ? true
              : false
          }
        />
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
