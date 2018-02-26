import model from 'parket';

const Todo = model('todo', {
  initial: () => ({
    isDone: false,
    text: '',
  }),
  actions: state => ({
    setText(text) {
      state.text = text;
    },
    toggleIsDone() {
      state.isDone = !state.isDone
    }
  })
});

const Todos = model('Todos', {
  initial: () => [],
  actions: state => ({
    addTodo(todo) {
      state.push(todo);
    }
  })
})