import { ActionTypes } from './test-actions';

const initialState = {
    test: null
};

export default function testReducer(state = initialState, action) {
    switch (action.type) {
    case ActionTypes.TEST_SET: {
        return {
            ...state,
            test: action.test
        }
    }
    default:
        return state;
    }
}
