import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import history from './history';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';


//BrowserRouter per a fer servir el router i poder gestionar l'historic
const contenidor = document.getElementById('root');
const aplicacio = (
  <Provider store={store}>
    <Router history={history}>
        <App />
    </Router>
  </Provider>
);

ReactDOM.render( aplicacio, contenidor );