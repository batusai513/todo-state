import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './App';
import './Todo.css';
import { FilterProvider } from './components/FilterContext';
import { TodosProvider } from './components/TodosContext';

ReactDOM.render(
  <TodosProvider>
    <FilterProvider>
      <TodoApp />
    </FilterProvider>
  </TodosProvider>,
  document.querySelector('#root')
);
