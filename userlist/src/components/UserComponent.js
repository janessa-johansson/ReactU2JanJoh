// Imports main functionality/router/PropTypes from react.
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


// Maps and renders users as props from Dashboard component.
// Added functionality: rendering each user with a router link/state.
// Returns conditional rendering for color based on props from Dashboard.
class UserComponent extends Component {
  static propTypes = {
    showUsers: PropTypes.array,
    showColor: PropTypes.bool
  };

  render() {

    const users = this.props.showUsers.map((user, i) => {
      return (
        <p key={i}>
          <Link to={{
            pathname: `/user/${user}`,
            state: { redirect: true }
          }}
            style={{ textDecoration: 'none', color: this.props.showColor === true ? 'blue' : 'red' }}
          >{user}
          </Link></p>
      )
    })

    return (
      <div>
        <span>{users}</span>
      </div>
    )
  };
}

export default UserComponent;
