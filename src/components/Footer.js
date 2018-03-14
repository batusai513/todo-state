import React from 'react';
import P from "prop-types";

export default function Footer(props) {
  var leftItems = props.leftItems
  var setVisibilityFilter = props.setVisibilityFilter
  var clearCompleted = props.clearCompleted
  var toggleClearCompleted = props.toggleClearCompleted
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
      <button className="clear-completed" style={toggleClearCompleted === true ? {display: "block"} : {display: "none"}} onClick={clearCompletedHandler()}>Clear Completed </button>
    </footer>
  );

  function onClick(ref){
    setVisibilityFilter(ref);
  }

  function clearCompletedHandler(){
    return () =>{
      clearCompleted();
    }
  }
}

Footer.propTypes = {
  leftItems: P.number,
  setVisibilityFilter: P.func.isRequired,
  clearCompleted: P.func.isRequired,
  toggleClearCompleted: P.bool
}
