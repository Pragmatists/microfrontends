import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React 15</h1>
                </header>
                <div className="App-intro">
                    <a href="/react">Go to React 16</a>
                    <div style={{borderStyle: "dashed"}} id="react-app"></div>
                    <div id="angular-app"></div>
                </div>
            </div>
        );
    }
}

export default App;
