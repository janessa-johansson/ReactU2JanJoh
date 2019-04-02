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

const theme = createMuiTheme({
  palette: {
    primary: green,
  }
});

// Basic class with constructor and display state as boolean
export default class CardComponent extends Component {
  
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

  // Route change??

  // routeChange = () => {
  //  
  // };

  // Ternary for show/hide button text
  render() {

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

    // Material Design Card with state.display conditional and toggle function
    return (
      <Fragment>
        <Card className={this.props.parent ? 'login' : 'card'}>
          {this.props.children}
          {this.props.parent && login}
          {this.state.showInfo && this.props.parent && showInfo}
          {this.props.parent && <Button variant="contained" onClick={this.toggleShow}>{buttonText}</Button>}
        </Card>
      </Fragment>
    )
  };
}

