'use strict';

// import {
//     ValuationService,
//     ContractService
// } from '../service/index';

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

export const createToken = ({ commit }, { username, password }) => {
    console.log(username);
};

export const toggleSidebarCollapse = ({ commit }) => {
    commit('TOGGLE_SIDEBAR_COLLAPSE');
};
