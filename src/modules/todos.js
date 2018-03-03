export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export default function todos(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return [todoFactory({ text: payload })].concat(state);
    case TOGGLE_TODO:
      return state.map(
        (todo, index) =>
          index === payload.index ? todoFactory({ isDone: !todo.isDone }) : todo
      );
    default:
      return state;
  }
}

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text,
  };
}

function todo(state = {}, action) {
  const { type, payload } = action;
}

function todoFactory({ text = '', isDone = false, id = Date.now() }) {
  return {
    id,
    text,
    isDone,
  };
}
