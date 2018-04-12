import React from "react";
import P from "prop-types";

export default class ToggleAll extends React.Component {
  state = {
    checked: false
  };

  onInputChange = () => {
    this.setState({
        checked: !this.state.checked
      },
      () => {
        this.props.toggleAll(this.state.checked);
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <input
          id="toggle-all"
          onChange={this.onInputChange}
          className="toggle-all"
          type="checkbox"
          value={this.state.checked}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </React.Fragment>
    );
  }
}

ToggleAll.propTypes = {
  toggleAll: P.func.isRequired
};
