import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './Main';
import Cardgame from './Cardgame';
import Hi from './Hi';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Number from './Number'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </HashRouter>
);

