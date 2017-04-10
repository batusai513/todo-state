import React,  {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Movie extends Component {
  render() {
    var {title, description, posterUrl, id} = this.props;
    return(
      <div className="media movie">
        <img src={posterUrl} alt={title} className="media__img" />
        <div className="media__body">
          <h3><Link to={`/movies/${id}`}>{title}</Link></h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}