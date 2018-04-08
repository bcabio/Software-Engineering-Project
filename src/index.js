import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

// require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));
unregister();