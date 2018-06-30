import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as singleSpa from 'single-spa';
import {registerReactApp} from "./apps/react-app";
import {registerAngularApp} from "./apps/angular-app";

ReactDOM.render(<App/>, document.getElementById('root'));


registerReactApp();
registerAngularApp();

singleSpa.start();
