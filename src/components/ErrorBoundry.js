import React, { Component } from 'react';

class ErrorBoundry extends Component {

	constructor(props) {
		super();

		this.state = {
			hasError: false,
		};
	}

	componentDidCatch(error, info) {
		this.setState({hasError: true});
	}

	render() {
		if(this.state.hasError) {
			return <h1>Houston we have an Error</h1>
		}

		// no error render children inside boundry
		return this.props.children;
	}
}

export default ErrorBoundry;