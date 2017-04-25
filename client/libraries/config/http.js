'use strict';

import axios from 'axios';
import qs from 'qs';

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://10.1.2.107:16020';

axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

axios.interceptors.response.use((res) => {
    if (res.status !== 200) {
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    return Promise.reject(error);
});

export default axios;
