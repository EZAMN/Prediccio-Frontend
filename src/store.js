import { createStore } from 'redux';
import reducers from './reducers';
import getMiddlewares from './middlewares';


//Build and export store
const store = createStore(reducers, getMiddlewares());

export default store;