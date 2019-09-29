import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onClick() {
    console.log("Clicked");
  }

  render() {
    return (
      <button className="btn" onClick={this.onClick.bind(this)}>
        Click
      </button>
    );
  }
}

export default Home;
