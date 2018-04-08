import React from "react";
import { TodosConsumer } from "./TodosContext";

export default function LeftTodos() {
  return (
    <TodosConsumer>
      {(context) => (
        <span className="todo-count">
          <strong>{context.leftTodos()}</strong> item left
        </span>
      )}
    </TodosConsumer>
  );
}
