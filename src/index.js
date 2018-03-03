import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';
import './components/Todo.css';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.querySelector('#root')
);
