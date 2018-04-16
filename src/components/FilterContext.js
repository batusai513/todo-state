import React, { createContext, Component } from "react";

var FilterContext = createContext();

export class FilterProvider extends Component {
  onChangeFilter = activeFilter => {
    this.setState({
      activeFilter
    });
  };

  state = {
    activeFilter: "all", // || active || completed
    onChangeFilter: this.onChangeFilter
  };

  render() {
    return (
      <FilterContext.Provider value={this.state}>
        {this.props.children}
      </FilterContext.Provider>
    );
  }
}

export var FilterConsumer = FilterContext.Consumer;
