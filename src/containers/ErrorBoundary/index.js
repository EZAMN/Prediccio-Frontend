import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          hasError: false,
          error: undefined,
          info: undefined
        };
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true, error, info });
    }
  
    render() {
      if (this.state.hasError) {
        const error = this.state.error.toString();
        const info = JSON.stringify(this.state.info, null, 2);
        
        return (
            <section className="error">
                <h1>Error occurred!</h1>
                <h2>{error}</h2>
                <p>{info}</p>
            </section>
            );
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary;