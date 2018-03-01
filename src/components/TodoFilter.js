import React from "react";
import PropTypes from "prop-types";
import { observer, inject } from 'mobx-react';

function TodoFilter({
  children,
  url,
  type,
  onChangeFilter,
  isActive
}) {
  return (
    <a onClick={changeFilterHandler(onChangeFilter, type)} className={`${isActive ? "selected" : ""}`} href="#/">
      {children}
    </a>
  );
}

function changeFilterHandler(onChangeFilter, type) {
  return function() {
    onChangeFilter(type);
  }
}

export default inject(({store}) => ({
  onChangeFilter: store.changeFilter
}))(observer(TodoFilter));

TodoFilter.displayName = "TodoFilter";

TodoFilter.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};
