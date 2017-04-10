import React, { Component, createElement } from 'react';

class Children extends Component {
    render() {
        return (
            createElement('div', {className: 'children'}, this.props.children)
        );
    }
}

export default Children;
