import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './containers/App'

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

//BrowserRouter per a fer servir el router i poder gestionar l'historic
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  document.getElementById('root')
);
