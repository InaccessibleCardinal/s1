import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/';

export const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {

    let middlewares = [applyMiddleware(sagaMiddleware)];

    let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

    if (process.env.NODE_ENV === 'development') {
        middlewares.push(devTools);
    }

    const store = createStore(
        reducers, 
        {},
        compose(...middlewares)
    );

    return store;

}
