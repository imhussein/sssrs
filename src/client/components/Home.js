import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      <>
        <button className="btn" onClick={this.onClick.bind(this)}>
          Click
        </button>
        <Link className="btn" to="/users">
          Users
        </Link>
      </>
    );
  }
}

export default {
  component: Home
};
