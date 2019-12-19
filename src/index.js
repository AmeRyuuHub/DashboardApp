import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import App from './App';
import {Router} from 'react-router-dom';
import rootReducer from './store/redusers';
import { createBrowserHistory } from 'history';
import thunkMiddleware from "redux-thunk";
import './index.css';
import { CssBaseline } from '@material-ui/core';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;





const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleware)));
const history = createBrowserHistory();

ReactDOM.render(
        <Router history={history}>
            <Provider store={store}>
            <CssBaseline/>
                <App />
            </Provider>
        </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

