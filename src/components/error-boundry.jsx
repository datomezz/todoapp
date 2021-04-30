import React, {Component} from "react";

const ErrorIndicator = () => {
  return (
    <div className="alert alert-danger" role="alert">
      Error Has Accured
    </div>
  )
}

export default class ErrorBoundry extends Component {
  state = {
    hasError : false
  }

  componentDidCatch() {
    this.setState(() => {
      return {
        hasError : true
      }
    })
  }

  render() {
    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    return this.props.children;
  }
}
