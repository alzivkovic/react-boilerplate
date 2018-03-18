import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
/* actions */
import { ActionTypes } from './test-actions';
/* services */
import TestService from '../../services/test-service.js';

function* getTest(action) {
    const testItem = yield TestService.getTest(action.testId);
    yield put({ type: ActionTypes.TEST_SET, testItem });
}

export default function* homeSaga() {
    yield takeEvery(ActionTypes.TEST_GET, getTest);
}
