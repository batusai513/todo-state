import React, { createElement, PropTypes, Component } from 'react';
import Children from './children';

function SecondComponent(prop){ 
  return (
    createElement('h1', null, prop.title)
  );
}

SecondComponent.propTypes = {
  title: PropTypes.string.isRequired
};

class ThirdComponent extends Component {
  render() {
    return (
      createElement('h2', null, this.props.subTitle)
    );
  }
}

class NewComponent extends Component {
    render() {
        return (
            createElement('div', {
                className: 'hola'
            },
              createElement('span', null, 'mundo'),


              createElement(Children, {}, 
                createElement('div', null,
                'hola mundo desde el children',
                  createElement(ThirdComponent, {
                    subTitle: 'Miguel'
                  })
                )
              ),

              createElement(SecondComponent, {
                title: 'hola'
              })
            )
        );
    }
}

export default NewComponent;
