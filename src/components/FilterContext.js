import React, { Component, createContext } from "react";

var FilterContext = createContext();

export class FilterProvider extends React.PureComponent {
  changeFilter = filter => {
    this.setState(state => ({ selectedFilter: filter }));
  };

  state = {
    selectedFilter: "all", // active, completed
    changeFilter: this.changeFilter
  };

  render() {
    return (
      <FilterContext.Provider
        value={this.state}
      >
        {this.props.children}
      </FilterContext.Provider>
    );
  }
}

export const FilterConsumer = FilterContext.Consumer;
