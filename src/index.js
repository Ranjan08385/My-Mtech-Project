// index.js - WEB
import 'react-app-polyfill/ie11';
// import 'react-app-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './pages/login/login.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register(
      './registerServiceWorker.js',

      { scope: '.' }
    )
    .then(function() {
      console.log('sw registered');
    });
}
