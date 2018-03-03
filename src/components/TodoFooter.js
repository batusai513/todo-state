import React from 'react';
import TodoFilter from './TodoFilter';
import TodoCount from './TodoCount';

export default function TodoFooter() {
  return (
    <footer className="footer">
      <TodoCount />
      <ul className="filters">
        <li>
          <TodoFilter
            type="all"
            url="#/"
          >
            All
          </TodoFilter>
        </li>
        <li>
          <TodoFilter
            type="active"
            url="#/active"
          >
            Active
          </TodoFilter>
        </li>
        <li>
          <TodoFilter
            type="completed"
            url="#/completed"
          >
            Completed
          </TodoFilter>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

TodoFooter.propTypes = {};
