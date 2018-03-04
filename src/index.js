import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';
import TodoApp from './components/TodoApp';
import './components/Todo.css';

ReactDOM.render(
  <Provider>
    <TodoApp />
  </Provider>,
  document.querySelector('#root')
);

