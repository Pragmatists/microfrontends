import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const navigateTo = url => window.history.pushState(null, null, url)

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React 15</h1>
                </header>
                <div className="App-intro">
                    <a href='#' onClick={() => navigateTo('/react')}>Go to React 16</a><br/>
                    <a href='#' onClick={() => navigateTo('/angular')}>Go to Angular</a><br/>
                    <a href='#' onClick={() => navigateTo('/')}>Go to Main page</a><br/>
                    <div style={{borderStyle: "dashed"}} id="react-app"></div>
                    <div style={{borderStyle: "dashed"}} id="sub-app-angular"></div>
                </div>
            </div>
        );
    }
}

export default App;
