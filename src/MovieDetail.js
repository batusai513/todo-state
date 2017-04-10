import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const MovieDetail = (props) => {
  console.warn(props);
  return (
    <h1>Pelicula {props.match.params.id}</h1>
  );
};

MovieDetail.displayName = 'MovieDetail';

MovieDetail.propTypes = {
  className: PropTypes.string,
};

export default MovieDetail;
