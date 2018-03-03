export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export default function todos(state = [], action) {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case ADD_TODO:
      return [todoFactory({
        text: payload
      })].concat(state);
    case TOGGLE_TODO:
      return state.map(
        (todo) => todo.id === payload ? todoFactory({ ...todo,
          isDone: !todo.isDone
        }) : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== payload);
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

export function removeTodo(idx) {
  return {
    type: REMOVE_TODO,
    payload: idx,
  };
}

export function toggleTodoDone(idx) {
  return {
    type: TOGGLE_TODO,
    payload: idx,
  };
}


export function getFilteredList(list, filter) {
  switch (filter) {
    case 'active':
      return list.filter(item => !item.isDone);
    case 'completed':
      return list.filter(item => item.isDone);
    default:
      return list;
  }
}

function todoFactory({
  text = '',
  isDone = false,
  id = Date.now()
}) {
  return {
    id,
    text,
    isDone,
  };
}