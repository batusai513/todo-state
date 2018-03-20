import React from 'react';
import P from "prop-types";
import Filter from "./Filter";

export default function Footer(props) {
  var leftItems = props.leftItems
  var setVisibilityFilter = props.setVisibilityFilter
  var clearCompleted = props.clearCompleted
  var toggleClearCompleted = props.toggleClearCompleted
  var visibilityFilter = props.visibilityFilter
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftItems}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <Filter visibilityFilter={visibilityFilter} onClick={onClick} text="all"></Filter>
        </li>
        <li>
          <Filter visibilityFilter={visibilityFilter} onClick={onClick} text="active"></Filter>
        </li>
        <li>
          <Filter visibilityFilter={visibilityFilter} onClick={onClick} text="completed"></Filter>
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
  toggleClearCompleted: P.bool,
  visibilityFilter: P.string
}
