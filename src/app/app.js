import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Route, Router, Redirect, hashHistory } from 'react-router';
/* store */
import { getStore, startSagas } from './app-store';
/* pages */
import TestPage from './pages/test/test';

/* Route setup */
const routes = (
    <Router history={hashHistory} >
        <IndexRoute path="test" component={TestPage} />
        <Route path="test" components={TestPage} />
        <Redirect from="*" to="test" />
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
