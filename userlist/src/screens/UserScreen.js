import React, { Component } from 'react'
import CardComponent from '../components/CardComponent';

class UserScreen extends Component {
  
  render() { 
    
    return (
      <div>
      <CardComponent value="users" />
      </div>
    )
  }
}

export default UserScreen;