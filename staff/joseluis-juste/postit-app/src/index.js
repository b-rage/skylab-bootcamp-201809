import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import BoardComponent from './custom-components/board';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BoardComponent />, document.getElementById('root'));
serviceWorker.unregister();
