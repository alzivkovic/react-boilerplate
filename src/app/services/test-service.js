import ApiHelper from 'services/api-helper';

const resourceUrl = 'Test';
class TestService {
    getTest() {
        return ApiHelper.get(`${resourceUrl}`)
            .then(response => response.data, () => null);
    }
}

export default new TestService();
