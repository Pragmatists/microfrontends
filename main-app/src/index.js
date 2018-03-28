import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import hinclude from '../node_modules/Hinclude/hinclude';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
