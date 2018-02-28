import { extendObservable, computed, action } from "mobx";

export class Todo {
  constructor({ text = "", isDone = false }, root) {
    extendObservable(this, {
      isDone,
      text,
      root,
      toggleIsDone: action(function toggleIsDone() {
        this.isDone = !this.isDone;
      }.bind(this)),
      changeText: action(function changeText(text) {
        this.text = text;
      }.bind(this)),
      removeTodo: action(function removeTodo() {
        this.root.removeTodo(this);
      }.bind(this))
    });
  }
}

export class TodosApp {
  constructor() {
    extendObservable(this, {
      todos: [],
      selectedFilter: "all",
      completedTodos: computed(function completedTodos() {
        return this.todos.filter(todo => todo.isDone);
      }),
      activeTodos: computed(function completedTodos() {
        return this.todos.filter(todo => !todo.isDone);
      }),
      getFilteredList: computed(function getFilteredList() {
        return {
          all: this.todos,
          active: this.activeTodos,
          completed: this.completedTodos
        }[this.selectedFilter];
      }),
      addTodo: action(function addTodo(text) {
        this.todos.unshift(new Todo({ text }, this));
      }.bind(this)),
      removeTodo: action(function removeTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
      }.bind(this)),
      changeFilter: action(function changeFilter(filter) {
        this.filter = filter;
      }.bind(this))
    });
  }
}
