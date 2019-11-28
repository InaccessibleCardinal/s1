import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore, {sagaMiddleware} from './redux/configureStore';
import rootSaga from './redux/sagas/rootSaga';

import './index.css';
import App from './App';

const store = configureStore();
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
