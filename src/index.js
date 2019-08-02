import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

import App from './containers/App';
import reducers from './reducers'

import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const store = createStore(reducers, applyMiddleware(Thunk));

//BrowserRouter per a fer servir el router i poder gestionar l'historic
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
