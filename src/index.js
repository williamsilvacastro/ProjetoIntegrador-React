import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import properties from './properties';
var backendUrl = properties.backendUrl;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


