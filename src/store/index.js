import { extendObservable, computed, action } from "mobx";

export class Todo {
  constructor({ text = "", isDone = false }, root) {
    extendObservable(this, {
      id: Date.now(),
      isDone,
      text,
      root,
      isEditing: false,
      toggleIsDone: action(
        function toggleIsDone() {
          this.isDone = !this.isDone;
        }.bind(this)
      ),
      changeText: action(
        function changeText(text) {
          this.text = text;
        }.bind(this)
      ),
      removeTodo: action(
        function removeTodo() {
          this.root.removeTodo(this);
        }.bind(this)
      )
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
      leftTodos: computed(function leftTodos() {
        return this.activeTodos.length;
      }),
      getFilteredList: computed(function getFilteredList() {
        return {
          all: this.todos,
          active: this.activeTodos,
          completed: this.completedTodos
        }[this.selectedFilter];
      }),
      addTodo: action(
        function addTodo(text) {
          this.todos.unshift(new Todo({ text }, this));
        }.bind(this)
      ),
      removeTodo: action(
        function removeTodo(todo) {
          this.todos.splice(this.todos.indexOf(todo), 1);
        }.bind(this)
      ),
      changeFilter: action(
        function changeFilter(filter) {
          this.selectedFilter = filter;
        }.bind(this)
      ),
      toggleActiveTodos: action(function toggleActiveTodos(state) {
        if(state === true) {
          this.activeTodos.forEach(item => item.toggleIsDone());
        } else {
          this.activeTodos.forEach(item => item.toggleIsDone());
        }
      }.bind(this)),
      clearCompleted: action(function clearCompleted() {
        this.completedTodos.forEach(todo => todo.removeTodo())
      }.bind(this))
    });
  }
}
