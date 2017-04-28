'use strict';

import {
    TokenService
} from '../service/index';

// /**
//  * 获取盯市产品详情
//  * @return {object}  产品详情数据
//  */
// export const getValuationProducts = ({ commit }) => {
//     return ValuationService.get('/market/product')
//         .then(res => {
//             return res.data;
//         });
// };

// /**
//  * 获取互换产品数据
//  * @return {Object}      互换产品
//  */
// export const getSwapProducts = ({ commit }) => {
//     return ContractService.get('/product')
//         .then(res => {
//             return res.data;
//         });
// };

/**
 * 创建新的客户端token
 * @param  {String} options.username 用户名
 * @param  {String} options.password 密码
 * @return {[type]}                  [description]
 */
export const createToken = ({ commit }, { username, password }) => {
    return TokenService.post({
            username: username.trim(),
            password: password.trim()
        })
        .then(res => {
            console.log(1);
        });
};

export const toggleSidebarCollapse = ({ commit }) => {
    commit('TOGGLE_SIDEBAR_COLLAPSE');
};
