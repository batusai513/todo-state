import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../modules/selectedFilter';

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

export default connect(mapStateToProps, {
  onChangeFilter: changeFilter,
})(TodoFilter);

function mapStateToProps(state, ownProps) {
  const { selectedFilter } = state;
  const { type } = ownProps;
  return {
    isActive: selectedFilter === type,
  };
}

TodoFilter.displayName = 'TodoFilter';

TodoFilter.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
