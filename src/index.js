import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./App";
import { NameProvider } from "./components/Context";
import "./Todo.css";

ReactDOM.render(
	<NameProvider>
		<TodoApp />
	</NameProvider>,
	document.querySelector("#root")
);
