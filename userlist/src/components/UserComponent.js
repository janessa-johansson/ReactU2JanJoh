// Imports main functionality from react and style from User module.css
import React, { Component } from 'react';

import { BrowserRouter, Link } from "react-router-dom";


// Maps and renders users as props from Dashboard component
// Returns conditional rendering for color based on props from Dashboard
class UserComponent extends Component {
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
