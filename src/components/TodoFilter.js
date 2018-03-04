import React from 'react';
import PropTypes from 'prop-types';
import { Subscribe } from 'unstated';
import SelectedFilterContainer from '../modules/SelectedFilterContainer';

function TodoFilter({ children, url, isActive, type, onChangeFilter }) {
  return (
    <a
      onClick={changeFilterHandler(onChangeFilter, type)}
      className={`${isActive ? 'selected' : ''}`}
      href="#/"
    >
      {children}
    </a>
  );
}

function changeFilterHandler(onChangeFilter, type) {
  return function() {
    onChangeFilter(type);
  };
}

export default function TodoFilterContainer(props) {
  return (
    <Subscribe to={[SelectedFilterContainer]}>
      {selectedFilter => (
        <TodoFilter
          {...props}
          isActive={selectedFilter.state.selectedFilter === props.type}
          onChangeFilter={selectedFilter.changeSelectedFilter}
        />
      )}
    </Subscribe>
  );
}

TodoFilter.displayName = 'TodoFilter';

TodoFilter.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
