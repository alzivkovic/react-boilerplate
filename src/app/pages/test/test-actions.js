export const ActionTypes = {
    TEST_GET: 'TEST_GET',
    TEST_SET: 'TEST_SET'
};

export function testAction(dispatch) {
    dispatch({
        type: ActionTypes.TEST_GET
    });
}
