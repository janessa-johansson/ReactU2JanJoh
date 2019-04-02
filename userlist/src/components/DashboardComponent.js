// Imports core functionality from React, required components (Wrapper/User),
// and imports style module for Dashboard. From Material Design, imports
// Buttons and TextField.
import React, { Component } from 'react'
import UserComponent from '../components/UserComponent';
import WrapperComponent from '../components/WrapperComponent';
import style from '../style/Dashboard.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Basic class with constructor, and states for users (array), colors (boolean),
// and an empty state for value, which is used in the textfield/input.
export default class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ['pelle', 'kalle'],
      color: true,
      value: ''
    }
  }

  // Adds users from textfield/input and prevents default submit behavior (redirecting)
  addUser = (event) => {
    const newUser = this.state.value;
    event.preventDefault();

    // Merges two arrays into user state for displaying users.
    this.setState({
      user: [...this.state.user, newUser]
    })

    // Resets value state, so the textfield/input can be cleared upon submit
    this.setState({
      value: ''
    });
  }

  // Removes user on index 1 and sets new array as user state
  removeUser = (e) => {
    var array = [...this.state.user]; // make a separate copy of the array
    var index = array.indexOf(e.target.value) // gets index value of target
    if (index !== 1) {
      array.splice(index, 1); //splices at index 1
      this.setState({ user: array }); // sets array as new user state
    }

    // Resets value of textfield/input just in case the user leaves data/doesn't submit it
    this.setState({
      value: ''
    });
  }

  // Handles the inout of the textfield/input and sets event data as value state
  handleInput = (e) => {
    this.setState({ value: e.target.value });
  }

  // Toggles the color based on state boolean
  toggleColor = () => {
    this.setState(state => ({ color: !state.color }));
  }

  // Renders components, styles, and Material Design components (Button/TextField).
  // Handles onClick functions (add/remove user, toggle color)
  render() {
    return (
      <div className={style["wrapper"]}>
        <div className={style["userrender"]}>
          <WrapperComponent>
            <UserComponent
              showUsers={this.state.user}
              showColor={this.state.color}
            />
            <div className={style["content"]}>
              <Button variant="contained" onClick={this.toggleColor}>Toggle Color</Button>
            </div>
          </WrapperComponent>
        </div>
        <div>
          <WrapperComponent>
            <form className={style["useredit"]} onSubmit={this.addUser}>
              <TextField variant="filled" type="text" value={this.state.value} onChange={this.handleInput} />
              <br />
              <Button variant="contained" color="primary" size="large" type="submit" value="Submit">Add</Button>
            </form>
            <div className={style["content"]}>
              <Button variant="contained" color="secondary" size="large" className={style["remove"]} onClick={this.removeUser}>Remove</Button>
            </div>
          </WrapperComponent>
        </div>
      </div>
    )
  };
}
