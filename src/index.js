import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, observer } from 'mobx-react'
import './week4/Todo.css';

import Tarea from './week3/Forms';
import TodoApp from './week4/TodoApp';
import { TodosApp } from './week4/model';
import MoviesApp from './week5/Movies';

ReactDOM.render(
  <Provider store={new TodosApp()}>
    <TodoApp />
  </Provider>,
  document.querySelector('#root')
);

