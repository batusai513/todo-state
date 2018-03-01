import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, observer } from 'mobx-react'
import { useStrict } from 'mobx'
import TodoApp from './components/TodoApp';
import { TodosApp } from './store';
import './components/Todo.css';

useStrict(true);

ReactDOM.render(
  <Provider store={new TodosApp()}>
    <TodoApp />
  </Provider>,
  document.querySelector('#root')
);

