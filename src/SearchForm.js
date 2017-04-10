import React,  {Component} from 'react';

export default class SearchForm extends Component {
  render() {
    return(
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder={"Type to search a movie's " + this.props.filterParameter + '...'}
          value={this.props.searchString}
          onChange={this.props.onSearchChange}
          className="search"
          disabled={this.props.loading}
        />
        <div className="filter">
          <span>Filter by</span>
          <input
            type="radio"
            name="filterParameter"
            id="filterByTitle"
            value="title"
            checked={this.props.filterParameter === 'title'}
            onChange={this.props.onFilterChange}
            className="radio"
            disabled={this.props.loading}
          />
          <label htmlFor="filterByTitle">Title</label>
          <input
            type="radio"
            name="filterParameter"
            id="filterByDescription"
            value="description"
            checked={this.props.filterParameter === 'description'}
            onChange={this.props.onFilterChange}
            className="radio"
            disabled={this.props.loading}
          />
          <label htmlFor="filterByDescription">Description</label>
        </div>
      </form>
    );
  };
}