import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './App';
import './Todo.css';
import { FilterProvider } from './components/FilterContext';

ReactDOM.render(
  <FilterProvider>
    <TodoApp />
  </FilterProvider>,
  document.querySelector('#root')
);
