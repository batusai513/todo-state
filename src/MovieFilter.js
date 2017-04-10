import React,  {Component} from 'react';
import axios from 'axios';
import {
  Route
} from 'react-router-dom';
import MovieDetail from './MovieDetail';
import Movies from './Movies';
import Movie from './Movie';

export default class MovieFilter extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      filteredMovies: [],
      searchString: '',
      filterParameter: 'title',
      loading: false,
      error: '',
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    this.setState({loading: true});
    var baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=475d960c7374b0d07a51bf9f1e9cfd03`;
    axios
      .get(baseUrl)
      .then(data => data.data.results)
      .then(data => this.setState({movies: data, filteredMovies: data, loading: false}))
      .catch(err => this.setState({ loading: false, error: err.toString() }));
  }

  onSearchChange(event) {
    var movies = this.state.movies.slice();
    var filteredMovieList = movies.filter((movie) => {return movie[this.state.filterParameter].toLowerCase().includes(event.target.value)});
    this.setState({
      filteredMovies: event.target.value !== '' ? filteredMovieList : movies,
      searchString: event.target.value
    })
  }

  onFilterChange(event) {
    var movies = this.state.movies.slice();
    var filteredMovieList = movies.filter((movie) => {return movie[event.target.value].toLowerCase().includes(this.state.searchString)});
    this.setState({
      filteredMovies: this.state.searchString !== '' ? filteredMovieList : movies,
      filterParameter: event.target.value
    })
  }

  render() {
    return (
      <div>
        <Route path="/movies/" exactly render={({match}) => <Movies movies={this.state.movies}  />} />
        <Route path="/movies/:id" render={(props) => <MovieDetail {...props} />} />
        {/*React.cloneElement(this.props.children, this.state)*/}
      </div>
    );
  }
}