// Imports main functionality from React, styles from Wrapper module and
// Button and Card from Material Design.
import React, { Component, Fragment } from 'react';
import style from '../style/Card.module.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';


import { withRouter, Route } from 'react-router-dom';
import PropTypes from "prop-types";

const theme = createMuiTheme({
  palette: {
    primary: green,
  }
});

// Basic class with constructor and display state as boolean
class CardComponent extends Component {
  
  static propTypes = {
    history: PropTypes.object.isRequired,
    children: PropTypes.any, //props.children can be undefined and an object
    parent: PropTypes.any, //props.parent can be undefined and a string
    match: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    }; 
  }

  // Toggles the display state for Material Design cards
  toggleShow = () => {
    this.setState(state => ({ showInfo: !state.showInfo }));
  };

  // Route change

  routeChange = () => {
   this.props.history.push('/dashboard')
  };

  // Ternary for show/hide button text
  render() {
    
    const { match } = this.props;

    const show = 'Show info'
    const hide = 'Hide info'
    const buttonText = this.state.showInfo ? <span>{hide}</span> : <span>{show}</span>;

    const showInfo =
      <div>
        <Typography variant="subheading" gutterBottom>
        Login to see content.
        </Typography>
      </div>

    const login =
      <div>
        <TextField variant="filled" type="text" />
        <MuiThemeProvider theme={theme}>
          <div className={style["loginbutton"]}>
            <Button variant="contained" color="primary" onClick={this.routeChange}>Login</Button>
            <hr />
          </div>
        </MuiThemeProvider>
      </div>

    const userInfo =
      <div>
        {this.props.value && this.props.location.state && <p>User: {match.params.user}</p>}
        {this.props.value && !this.props.location.state && <p>No user selected.</p>}
      </div>
  
    // Material Design Card with state.display conditional and toggle function
    return (
      <Fragment>
        <Card className={this.props.parent || this.props.value ? 'login' : 'card'}>
          {userInfo}
          {this.props.children}
          {this.props.parent && login}
          {this.state.showInfo && this.props.parent && showInfo}
          {this.props.parent && <Button variant="contained" onClick={this.toggleShow}>{buttonText}</Button>}
        </Card>
      </Fragment>
    )
  };
}

export default withRouter(CardComponent);