import React from "react";
import P from "prop-types";

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

Filter.propTypes = {
  text: P.string.isRequired,
  activeFilter: P.string.isRequired,
  onChangeFilter: P.func.isRequired,
};
