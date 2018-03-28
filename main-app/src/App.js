import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";
import './styles/bootstrap/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React 15</h1>
                </header>
                <div className="App-intro">
                    <Button bsStyle="primary">Bootstrap 3 button</Button>
                    <a href="/react">Go to React 16</a><br/>
                    <a href="/angular">Go to Angular</a><br/>
                    <div style={{borderStyle: "dashed"}} id="react-app"></div>
                    <div style={{borderStyle: "dashed"}} id="sub-app-angular"></div>
                </div>
            </div>
        );
    }
}

export default App;
