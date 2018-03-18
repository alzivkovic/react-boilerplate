import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
/* Sagas */
import testSaga from './pages/test/test-saga';
/* Reducers */
import testReducer from './pages/test/test-reducer';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    testReducer
});

const appReducer = (state, action) => reducer(state, action);

const enhancer = applyMiddleware(sagaMiddleware);

export function getStore(preloadedState) {
    return createStore(appReducer, preloadedState, enhancer);
}

export function startSagas() {
    sagaMiddleware.run(testSaga);
}
