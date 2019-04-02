// Imports index.css as global and typeface-roboto font for Material Design.
import React, { Component } from 'react';
import DashboardComponent from './components/DashboardComponent';
import './index.css';
import 'typeface-roboto';

// Renders DashboardComponent, which is the main entry point to the app.
class App extends Component {
  render() {
    return (
      <div>
          <DashboardComponent />
      </div>
    )};
}

export default App;
