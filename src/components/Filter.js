import React from "react";
import P from "prop-types";
import { FilterConsumer } from "./FilterContext";

export default function Filter({ text, activeFilter, onChangeFilter }) {
  return (
    <a
      href="#/"
      className={text.toLowerCase() === activeFilter ? "selected" : ""}
      onClick={() => onChangeFilter(text.toLowerCase())}
    >
      {text}
    </a>
  );
}

export function MapToProps(props) {
  return (
    <FilterConsumer>
      {context => (
        <Filter
          text={props.text}
          activeFilter={context.activeFilter}
          onChangeFilter={context.onChangeFilter}
        />
      )}
    </FilterConsumer>
  );
}

Filter.propTypes = {
  text: P.string.isRequired,
  activeFilter: P.string.isRequired,
  onChangeFilter: P.func.isRequired
};
