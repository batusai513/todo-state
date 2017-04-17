import React from 'react';
import PropTypes from 'prop-types';

export default function TodoFilter({
  children,
  url,
  selected
}) {
  return (
    <a className="selected" href="#/">{children}</a>
  )
}

TodoFilter.displayName = 'TodoFilter';

TodoFilter.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired
};
