import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { store } from './store';


it('renders without crashing', () => {

const history = createBrowserHistory();
  const div = document.createElement('div');
  ReactDOM.render( <Router history={history}>
    <Provider store={store}>
        <App />
    </Provider>
</Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
