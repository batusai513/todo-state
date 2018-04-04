import React, { Component, createContext } from "react";

var FilterContext = createContext();

export class FilterProvider extends Component {
  state = {
    selectedFilter: "all" // active, completed
  };

  changeFilter = filter => {
    this.setState(state => ({ selectedFilter: filter }));
  };

  render() {
    return (
      <FilterContext.Provider
        value={{
          state: this.state,
          changeFilter: this.changeFilter
        }}
      >
        {this.props.children}
      </FilterContext.Provider>
    );
  }
}

export const FilterConsumer = FilterContext.Consumer;
