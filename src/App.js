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
    toggleTodos: false
  };

  addTodo = text => {
    this.setState({
      todoList: this.state.todoList.concat(todoFactory(text)),
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
      todoList: list
    });
  };

  updateLeftItems = (length) => {
    this.setState({
      leftItems: length
    });
  }

  setVisibilityFilter = ref => {
    this.setState({
      visibilityFilter: ref
    });
  }

  getTodosbyFilter(visibilityFilter, list) {
    if (visibilityFilter === 'all') {
      return list;
    }else if (visibilityFilter === 'completed'){
      return list.filter(todo => todo.active === true )
    }else if (visibilityFilter === 'active'){
      return list.filter(todo => todo.active === false )
    }
  }

  onRemoveToDo = id => {
    var todoList = this.state.todoList;
    this.setState({
      todoList: todoList.filter(item => item.id !== id),
    });
  }

  clearCompleted = () => {
    var todoList = this.state.todoList;
    this.setState({
      todoList: todoList.filter(todo => todo.active === false)
    })
  }

  render() {
    var visibilityFilter = this.state.visibilityFilter;
    var todoList = this.state.todoList
    var list = this.getTodosbyFilter(visibilityFilter, todoList);
    return (
      <section className="todoapp">
        <Header onAddTodo={this.addTodo} updateLeftItems={this.updateLeftItems} />
        <Body list={list} onToggleTodo={this.toggleTodoActive} onRemoveToDo={this.onRemoveToDo} />
        <Footer leftItems={this.getTodosbyFilter('active', todoList).length} setVisibilityFilter={this.setVisibilityFilter} clearCompleted={this.clearCompleted} toggleClearCompleted={this.getTodosbyFilter('completed', todoList).length > 0 ? true : false} />
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
