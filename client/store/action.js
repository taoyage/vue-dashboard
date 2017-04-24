'use strict';

import { ValuationService } from 'service/index';

export const getValuationProducts = ({ commit }) => {
    return ValuationService.get('/market/product')
        .then(res => {
            return res.data;
        });
};
