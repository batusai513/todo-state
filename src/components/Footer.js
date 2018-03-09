import React from 'react';
import P from "prop-types";

export default function Footer(props) {
  var leftItems = props.leftItems
  var setVisibilityFilter = props.setVisibilityFilter
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftItems}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className="selected" onClick={() =>  onClick('all')}>
            All
          </a>
        </li>
        <li>
          <a href="#/active"  onClick={() => onClick('active')}>Active</a>
        </li>
        <li>
          <a href="#/completed"  onClick={() => onClick('completed')}>Completed</a>
        </li>
      </ul>
      <button className="clear-completed" />
    </footer>
  );

  function onClick(ref){
    setVisibilityFilter(ref);
  }
}

Footer.propTypes = {
  leftItems: P.number,
  setVisibilityFilter: P.func.isRequired
}
