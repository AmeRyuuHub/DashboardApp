import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose,applyMiddleware } from 'redux';
import rootReducer from './store/redusers';
import { createBrowserHistory } from 'history';
import { thunkMiddleware } from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleware)));
const history = createBrowserHistory();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( <Router history={history}>
    <Provider store={store}>
        <App />
    </Provider>
</Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
