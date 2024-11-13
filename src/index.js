import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index/index.css';

import './fonts/Roboto-Bold.ttf';
import './fonts/Roboto-Regular.ttf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);