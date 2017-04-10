import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      name: '',
      isChecked: false,
      number: 0,
      blood: ''
    };
  }

  onSubmitForm(e) {
    console.warn(this.state);
    e.preventDefault();
  }

  onChange({target}) {
    var key = target.name;
    var value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState((state, currentProps) => ({
      [key]: value
    }));
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmitForm}
        action=""
        >
        <input
          ref={el => this.name = el}
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.onChange}
        />
        <br/>
        <input
          name="isChecked"
          type="checkbox"
          checked={this.state.isChecked}
          value={true}
          onChange={this.onChange}
        />
        <div>
          <input
            onChange={this.onChange}
            name="blood"
            value="o"
            type="radio"
          />
          <label htmlFor="">o</label>
          <input
            onChange={this.onChange}
            name="blood"
            value="a"
            type="radio"
          />
          <label htmlFor="">a</label>
          <input
            onChange={this.onChange}
            name="blood"
            value="b"
            type="radio"
          />
          <label htmlFor="">b</label>
          <input
            onChange={this.onChange}
            name="blood"
            value="ab"
            type="radio"
          />
          <label htmlFor="">ab</label>
        </div>
        <br/>
        <select
          value={this.state.number}
          onChange={this.onChange}
          name="number"
          id=""
        >
          <option value="">0</option>
          <option value="123">123</option>
          <option value="1234">1234</option>
        </select>
        <button type="submit">
          Send
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  title: PropTypes.string
};
