import React, { Component } from "react";
import reactContext from "create-react-context";

var VisibilityFilterContext = reactContext();

export class VisibilityFilterProvider extends Component {
  state = {
    visibilityFilter: "all" // completed, active
  };

  changeVisibilityFilter = visibilityFilter => {
    this.setState({
      visibilityFilter
    });
  };

  render() {
    return (
      <VisibilityFilterContext.Provider
        value={{
          visibilityFilter: this.state.visibilityFilter,
          changeVisibilityFilter: this.changeVisibilityFilter
        }}
      >
        {this.props.children}
      </VisibilityFilterContext.Provider>
    );
  }
}

export const VisibilityFilterConsumer = VisibilityFilterContext.Consumer;
