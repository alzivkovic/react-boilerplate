import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Route, Router, Redirect, hashHistory } from 'react-router';
/* store */
import { getStore, startSagas } from './app-store';
/* axios interceptors */
import './interceptors';
/* pages */
import TestPage from './pages/user-pages/test/test';

/* Route setup */
const routes = (
    <Router history={hashHistory} >
        <Route path="test" component={TestPage} />
    </Router>
);

/* Store initialization */
const store = getStore();

startSagas();

/* App render */
render(
    (
        <Provider store={store}>
            {routes}
        </Provider>
    ),
    document.getElementById('testApp')
);

export default store;
