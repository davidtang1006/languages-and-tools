/* ./src/index.js */
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; // We do not need this
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
