import { applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';


//Param the middlewares depending of the enviroment
const DEFAULT_ENVIRONMENT = 'development';
let environment = DEFAULT_ENVIRONMENT;
if (process && process.env && process.env.NODE_ENV) {
    environment = process.env.NODE_ENV;
}

function getMiddlewaresDev() {

    //Apply redux devtools hook
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    //Apply thunk middleware for async actions
    const enhancer = composeEnhancers(applyMiddleware(Thunk));

    return enhancer;
}

function getMiddlewaresProd() {

    //Thunk only middleware
    return applyMiddleware(Thunk);
}

/*
 * Returns the collection of middlewares
 ***/
export default function getMiddlewares() {
    switch (environment) {
        case 'development':
            return getMiddlewaresDev();
        default:
            return getMiddlewaresProd();
    }
}
