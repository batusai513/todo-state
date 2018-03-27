import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./App";
import { NameProvider } from "./components/Context";
import { VisibilityFilterProvider } from './components/VisibilityFilterContext';
import { TodoProvider } from './components/TodoContext';
import "./Todo.css";

ReactDOM.render(
	<VisibilityFilterProvider>
		<TodoProvider>
		  <TodoApp />
		</TodoProvider>
	</VisibilityFilterProvider>,
	document.querySelector("#root")
);
