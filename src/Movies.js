import React from 'react';
import SearchForm from './SearchForm';
import MovieList from './MovieList';

function Movies(props) {
  return (
  <div>
    <SearchForm
      onSearchChange={props.onSearchChange}
      searchString={props.searchString}
      filterParameter={props.filterParameter}
      onFilterChange={props.onFilterChange}
      loading={props.loading}
    />
    <MovieList movies={props.movies} loading={props.loading} />
  </div>
  )
}

export default Movies;