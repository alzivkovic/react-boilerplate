import axios from 'axios';

import apiConfig from './api-configuration';

const initialHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
};

const getAccessToken = () => {
    localStorage.getItem('access_token');
};

const getHeaders = () => Object.assign({}, initialHeaders, {
    Authorization: `Bearer ${getAccessToken()}`
});

class ApiHelper {

    static get(resourceUrl) {
        const url = `${apiConfig.baseUrl}/${resourceUrl}`;
        return axios({
            method: 'get',
            url,
            headers: getHeaders()
        });
    }

    static post(resourceUrl, data) {
        const url = `${apiConfig.baseUrl}/${resourceUrl}`;
        return axios({
            method: 'post',
            url,
            data,
            headers: getHeaders()
        });
    }

    static put(resourceUrl, data) {
        const url = `${apiConfig.baseUrl}/${resourceUrl}`;
        return axios({
            method: 'put',
            url,
            data,
            headers: getHeaders()
        });
    }

    static remove(resourceUrl) {
        const url = `${apiConfig.baseUrl}/${resourceUrl}`;
        return axios({
            method: 'delete',
            url,
            headers: getHeaders()
        });
    }
}

export default ApiHelper;
