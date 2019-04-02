// Imports main functionality from React, styles from Wrapper module and
// Button and Card from Material Design.
import React, { Component, Fragment } from 'react';
import style from '../style/Wrapper.module.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

// Basic class with constructor and display state as boolean
export default class WrapperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }

  // Toggles the display state for Material Design cards
  toggleShow = () => {
    this.setState(state => ({ display: !state.display }));
  };

  // Ternary for show/hide button text
  render() {
    const show = 'Show content'
    const hide = 'Hide content'
    const buttonText = this.state.display ? <span>{hide}</span> : <span>{show}</span>;

    // Material Design Card with state.display conditional and toggle function
    return (
      <Fragment>
        <Card className={style["card"]}>
          {this.state.display && this.props.children}
          <hr />
          <div className={style["content"]}>
            <Button variant="contained" onClick={this.toggleShow}>{buttonText}</Button>
          </div>
        </Card>
      </Fragment>
    )};
}

