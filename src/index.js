import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';

import App from './containers/App';
import reducers from './reducers';
import history from './history';

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(Thunk)));
//const store = createStore(reducers, applyMiddleware(Thunk));

//BrowserRouter per a fer servir el router i poder gestionar l'historic
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
