import { observable, computed, action, decorate } from "mobx";

class TodoDefinition {
  constructor({ text = "", isDone = false }, root) {
    this.isDone = isDone;
    this.text = text;
    this.root = root;
  }
  id = Date.now();
  isDone = false;
  text = "";
  isEditing = false;
  toggleIsDone() {
    this.isDone = !this.isDone;
  }
  changeText(text) {
    this.text = text;
  }
  removeTodo() {
    this.root.removeTodo(this);
  }
}

export const Todo = decorate(TodoDefinition, {
  id: observable,
  isDone: observable,
  text: observable,
  isEditing: observable,
  toggleIsDone: action.bound,
  changeText: action.bound,
  removeTodo: action.bound
});

class TodosAppDefinition {
  todos = [];
  selectedFilter = "all";
  get completedTodos() {
    return this.todos.filter(todo => todo.isDone);
  }
  get activeTodos() {
    return this.todos.filter(todo => !todo.isDone);
  }
  get leftTodos() {
    return this.activeTodos.length;
  }
  get getFilteredList() {
    return {
      all: this.todos,
      active: this.activeTodos,
      completed: this.completedTodos
    }[this.selectedFilter];
  }
  addTodo(text) {
    this.todos.unshift(new Todo({ text }, this));
  }
  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
  changeFilter(filter) {
    this.selectedFilter = filter;
  }
  toggleActiveTodos(state) {
    if (state === true) {
      this.activeTodos.forEach(item => item.toggleIsDone());
    } else {
      this.activeTodos.forEach(item => item.toggleIsDone());
    }
  }
  clearCompleted() {
    this.completedTodos.forEach(todo => todo.removeTodo());
  }
}

export const TodosApp = decorate(TodosAppDefinition, {
  todos: observable,
  selectedFilter: observable,
  completedTodos: computed,
  activeTodos: computed,
  leftTodos: computed,
  getFilteredList: computed,
  addTodo: action.bound,
  removeTodo: action.bound,
  changeFilter: action.bound,
  toggleActiveTodos: action.bound,
  clearCompleted: action.bound
});
