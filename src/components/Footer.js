import React from "react";
import P from "prop-types";
import Filter from "./Filter";

export default function Footer({
  leftItems,
  setVisibilityFilter,
  clearCompleted,
  toggleClearCompleted,
  visibilityFilter
}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftItems}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <Filter
            text="all"
          />
        </li>
        <li>
          <Filter
            text="active"
          />
        </li>
        <li>
          <Filter
            text="completed"
          />
        </li>
      </ul>
      <button
        className="clear-completed"
        style={
          toggleClearCompleted === true
            ? { display: "block" }
            : { display: "none" }
        }
        onClick={clearCompletedHandler()}
      >
        Clear Completed{" "}
      </button>
    </footer>
  );

  function onClick(ref) {
    setVisibilityFilter(ref);
  }

  function clearCompletedHandler() {
    return () => {
      clearCompleted();
    };
  }
}

Footer.propTypes = {
  leftItems: P.number,
  clearCompleted: P.func.isRequired,
  toggleClearCompleted: P.bool,
  visibilityFilter: P.string
};
