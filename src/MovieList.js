import React,  {Component} from 'react';
import Movie from './Movie';

export default class MovieList extends Component {
  render() {
    if(!this.props.loading) {
      return(
        <div>
          {
            this.props.movies.map((movie, index) => {
              return <Movie key={index} id={movie.id} title={movie.title} description={movie.overview} posterUrl={movie.posterUrl} />
            })
          }
        </div>
      )
    }else{
      return(
         <div>Loading...</div>
      );
    }
  }
}
MovieList.defaultProps = {
  movies: [],
  loading: false,

}
