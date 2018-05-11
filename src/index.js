import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import configureStore from './store/configureStore';
import {Provider} from "react-redux";
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
