//The main screen/view for the Login Screen, used in routing.

import React, { Component } from 'react'
import CardComponent from '../components/CardComponent';

export default class LoginScreen extends Component {
    
  render() {
    return ( 
        <CardComponent parent="Login"/>
    )
  }
}

