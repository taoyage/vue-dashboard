'use strict';

const state = {
    /**
     * 顶部菜单
     * @type {Object}
     */
    header: {
        /**
         * 站点名称
         * @type {String}
         */
        name: '国泰君安证券'
    },
    /**
     * 侧边导航栏
     * @type {Object}
     */
    sidebar: {
        /**
         * 关于我
         * @type {String}
         */
        copyright: '陶雅阁',
        /**
         * 侧边栏菜单
         * @type {Array}
         */
        menus: [{
            text: '盯市估值',
            icon: 'el-icon-document',
            name: 'valuation',
            children: [
                { text: '互换产品详情', name: 'valuation' }
            ]
        }, {
            text: '互换合约管理',
            icon: 'el-icon-document',
            name: 'products',
            children: [
                { text: '互换产品列表', name: 'products' },
                { text: '互换合约录入', name: 'entry' }
            ]
        }, {
            text: '持仓管理',
            icon: 'el-icon-document',
            name: 'position',
            children: [
                { text: '持仓列表', name: 'position' }
            ]
        }, {
            text: '保证金管理',
            icon: 'el-icon-document',
            name: 'margin',
            children: [
                { text: '保证金总计', name: 'margin' }
            ]
        }, {
            text: '产品结算',
            icon: 'el-icon-document',
            name: 'settlement',
            children: [
                { text: '产品结算列表', name: 'settlement' }
            ]
        }]
    }
};
export default state;
