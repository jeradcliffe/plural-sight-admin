import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleWare from 'redux-saga';
import rootReducer from "./reducers/rootReducer";

import rootSaga from './sagas/rootSaga';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleWare)
);
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
