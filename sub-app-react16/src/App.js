import React, { Component } from 'react';
import './App.css';
import {ProjectsList} from "./ProjectsList";
import './styles/bootstrap/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProjectsList/>
      </div>
    );
  }
}

export default App;
