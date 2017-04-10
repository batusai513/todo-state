import React, { Component } from 'react';

export default class ImageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: props.random
    };
  }

  componentDidMount() {
    console.warn(this.element, this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      random: nextProps.random
    });
  }

  render () {
    var {uri, label, onNextImage} = this.props;
    var style = { maxWidth: '100%' };
    var _this = this;
    console.warn(this.props.random, this.state.random);
    return (
      <img
          ref={ function(el){ _this.element = el; } }
          style={style}
          src={uri}
          alt={label}
          onClick={onNextImage}
      />
    );
  }
}