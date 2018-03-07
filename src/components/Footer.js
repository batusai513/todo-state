import React from 'react';

export default function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>1</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed" />
    </footer>
  );
}