import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

const ModalRoot = document.getElementById('modals');

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.tree = document.createElement('div');
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    ModalRoot.appendChild(this.tree);
  }

  componentWillUnmount() {
    ModalRoot.removeChild(this.tree);
  }

  toggleOpen = e => {
    e.preventDefault();
    this.setState(state => {
      return {
        isOpen: !state.isOpen,
      };
    });
  };

  render() {
    const { isOpen } = this.state;
    const { action } = this.props;
    return (
      <Fragment>
        {action !== undefined && typeof action === 'function' ? (
          action(this.toggleOpen, isOpen)
        ) : (
          <button onClick={this.toggleOpen}>Abrir modal</button>
        )}
        {isOpen
          ? createPortal(
              <Fragment>
                <div className="modal-screen" />
                <div className="modal-content">
                  <button onClick={this.toggleOpen}>✖️</button>
                  {this.props.children}
                </div>
              </Fragment>,
              this.tree
            )
          : null}
      </Fragment>
    );
  }
}
