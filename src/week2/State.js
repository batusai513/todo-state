import React, { Component, createElement, PropTypes } from 'react';

export default class ClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            random: 0
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                random: Math.random()
            })
        }, 5000);
    }

    render() {
        return (
            createElement(StateChild, {
                random: this.state.random
            })
        )
    }
}

function StateChild(props) {
    return (
        createElement('span', {}, props.random)
    );
}