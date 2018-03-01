import React from "react";
import PropTypes from "prop-types";

export default function TodoFilter({
  children,
  url,
  selectedFilter,
  type,
  onChangeFilter
}) {
  return (
    <a onClick={changeFilterHandler(onChangeFilter, type)} className={`${selectedFilter == type ? "selected" : ""}`} href="#/">
      {children}
    </a>
  );
}

function changeFilterHandler(onChangeFilter, type) {
  return function() {
    onChangeFilter(type);
  }
}

TodoFilter.displayName = "TodoFilter";

TodoFilter.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  selectedFilter: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};
