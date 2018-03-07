import React, { Component, createElement } from "react";
import P from "prop-types";
import Header, { getName as getOtherName } from './components/Header'; // default y named
import Body from './components/Body';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    return createElement(
      "section",
      { className: "todoapp" },
      createElement(Header),
      createElement(Body),
      createElement(Footer)
    );
  }
}
