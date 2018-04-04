import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./components/TodoApp";
import { TodosProvider } from "./components/TodosContext";
import { FilterProvider } from "./components/FilterContext";
import "./components/Todo.css";

ReactDOM.render(
  <TodosProvider>
    <FilterProvider>
      <TodoApp />
    </FilterProvider>
  </TodosProvider>,
  document.querySelector("#root")
);
