import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import { configure } from 'mobx'
import TodoApp from './components/TodoApp';
import { TodosApp } from './store';
import './components/Todo.css';

configure({enforceActions: true});

ReactDOM.render(
  <Provider store={new TodosApp()}>
    <TodoApp />
  </Provider>,
  document.querySelector('#root')
);

