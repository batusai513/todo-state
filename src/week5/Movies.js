import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

var baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=475d960c7374b0d07a51bf9f1e9cfd03`;

export default class Movies extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get(baseUrl)
      .then(({data}) => {
        this.setState(state => ({ movies: data.results }))
      });
  }

  render() {
    return (
      <div>
        <h1>Movies</h1>
        {this.state.movies.map(movie => <p key={movie.id}>{movie.title}</p>)}
      </div>
    );
  }
}