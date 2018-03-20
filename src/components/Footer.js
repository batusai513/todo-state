import React from "react";
import P from "prop-types";
import Filter from "./Filter";
import { NameConsumer } from './Context';

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
            visibilityFilter={visibilityFilter}
            onClick={onClick}
            text="all"
          />
        </li>
        <li>
          <Filter
            visibilityFilter={visibilityFilter}
            onClick={onClick}
            text="active"
          />
        </li>
        <li>
          <Filter
            visibilityFilter={visibilityFilter}
            onClick={onClick}
            text="completed"
          />
        </li>
      </ul>
      <NameConsumer>
        {
          (value) => console.warn(value.changeText)||  (
            <div>
              <h2>{value.name}</h2>
              <button onClick={() => value.changeText("ohhhhhhhhh!")}>cambio 🐸</button>
            </div>
          )
        }
      </NameConsumer>
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
  setVisibilityFilter: P.func.isRequired,
  clearCompleted: P.func.isRequired,
  toggleClearCompleted: P.bool,
  visibilityFilter: P.string
};
