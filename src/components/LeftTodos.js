import React from "react";
import { TodosConsumer } from "./TodosContext";

export default function LeftTodos() {
  return (
    <TodosConsumer>
      {({ leftTodos }) => (
        <span className="todo-count">
          <strong>{leftTodos}</strong> item left
        </span>
      )}
    </TodosConsumer>
  );
}
