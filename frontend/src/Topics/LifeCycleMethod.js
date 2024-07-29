import React, { Component } from 'react'

export default class LifeCycleMethod extends Component {
  constructor() {
    super();
    console.log("Compiling Constructor")
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate() {
    if (this.state.count === 5 && this.state.count < 10) {
      return true;
    }

  }
  render() {
    console.log("Compiling render")
    return (
      <>

        <h1>LifeCycleMethod</h1>
        <h2>{this.state.count}</h2>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>click </button>
          </>
          )
  }
}

