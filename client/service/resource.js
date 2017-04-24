'use strict';

import { axios } from 'config/index';

function Resource(base, otherActions) {
    this.base = base;
    Object.assign(this, otherActions);
};

Resource.prototype = {
    get(id, options) {
        let url = `/${this.base}`;
        if (typeof id === 'object') {
            options = id;
        } else if (id !== undefined) {
            url += `/${id}`;
        }
        return axios.get(url, options);
    }
};

export default Resource;
