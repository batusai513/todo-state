import React from "react";
import PropTypes from "prop-types";
import { FilterConsumer } from "./FilterContext";

export default function TodoFilter({
  children,
  url,
  isSelected,
  type,
  onChangeFilter
}) {
  return (
    <a
      onClick={changeFilterHandler(onChangeFilter, type)}
      className={`${isSelected ? "selected" : ""}`}
      href="#/"
    >
      {children}
    </a>
  );
}

function changeFilterHandler(onChangeFilter, type) {
  return function $changeFilterHandler() {
    onChangeFilter(type);
  };
}

export function Filter(props) {
  return (
    <FilterConsumer>
      {context => (
        <TodoFilter
          {...props}
          isSelected={props.type === context.state.selectedFilter}
          onChangeFilter={context.changeFilter}
        />
      )}
    </FilterConsumer>
  );
}

TodoFilter.displayName = "TodoFilter";

TodoFilter.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};
