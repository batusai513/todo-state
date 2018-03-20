import React, { Component } from "react";
import createReactContext from "create-react-context";

const NameContext = createReactContext();

export class NameProvider extends Component {
	state = {
		name: "sdl"
	};

	changeText = text => {
		this.setState({
			name: text
		});
	};

	render() {
		return (
			<NameContext.Provider
				value={{
					name: this.state.name,
					changeText: this.changeText
				}}
			>

				{this.props.children}
			</NameContext.Provider>
		);
	}
}

export const NameConsumer = NameContext.Consumer;
