import React, { Component } from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    render() {
        const { hasError } = this.state;

        if (hasError) {
            return <h1>Oooopsy daisy. Something went wrong</h1>
        }

        return this.props.children;
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
}

export default ErrorBoundry;