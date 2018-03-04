import { Container } from 'unstated';

export default class TodosContainer extends Container {
  state = {
    todos: [],
  };

  addTodo = text => {
    this.setState({
      todos: [{ text, isDone: false, id: Date.now() }, ...this.state.todos],
    });
  };

  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    });
  };

  toggleTodoIsDone = id => {
    this.setState({
      todos: this.state.todos.map(
        todo => (todo.id === id ? this.toggleTodo(todo) : todo)
      ),
    });
  };

  leftTodosCount = () => {
    return this.getFilteredList(this.state.todos, 'active').length;
  }

  toggleTodo(todo) {
    return {
      ...todo,
      isDone: !todo.isDone,
    };
  }

  getFilteredList(list, filter) {
    switch (filter) {
      case 'active':
        return list.filter(item => !item.isDone);
      case 'completed':
        return list.filter(item => item.isDone);
      default:
        return list;
    }
  }
}
