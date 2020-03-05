import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import { CssBaseline } from "@material-ui/core";
import { store } from "./store";

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme(
  {
    palette: {
      // Switching the dark mode on is a single property value change.
      type: 'light',
    }});
theme = responsiveFontSizes(theme);


const history = createBrowserHistory();
window.store = store;
ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);



