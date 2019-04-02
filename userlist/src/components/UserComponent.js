// Imports main functionality from react and style from User module.css
import React, { Component, Fragment } from 'react';
import style from '../style/User.module.css';

// Maps and renders users as props from Dashboard component
// Returns conditional rendering for color based on props from Dashboard
export default class UserComponent extends Component {
  render() {
    const users = this.props.showUsers.map((user, i) => {
      return <p key={i} style={{ color: this.props.showColor === true ? 'blue' : 'red' }}>{user}</p>
    })

    return (
      <Fragment>
        <div className={style["content"]}>
          <span>{users}</span>
        </div>
      </Fragment>
    )};
}
