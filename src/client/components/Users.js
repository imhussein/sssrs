import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/index";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  static getDerivedStateFromProps(props) {
    const { users } = props;
    if (users) {
      return {
        users
      };
    } else {
      return {
        users: []
      };
    }
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <ul>
        {this.state.users.map((user, index) => {
          return <li key={index}>{user.name}</li>;
        })}
      </ul>
    );
  }
}

export default connect(
  ({ users: { users } }) => ({
    users
  }),
  { fetchUsers }
)(Users);
