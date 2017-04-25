import Vue from 'vue';
import Router from 'vue-router';
import layout from 'components/layout';
Vue.use(Router);

export default new Router({
    routes: [{
        path: '/login',
        name: 'login',
        component: resolve => require.ensure([], () => resolve(require('views/login/login')), 'login')
    }, {
        path: '/',
        name: 'layout',
        component: layout,
        children: [{
            path: '',
            redirect: '/valuation'
        }, {
            path: '/valuation',
            name: 'valuation',
            component: resolve => require.ensure([], () => resolve(require('views/valuation/valuation')), 'valuation')
        }, {
            path: '/products',
            name: 'products',
            component: resolve => require.ensure([], () => resolve(require('views/contract/products')), 'products')
        }]
    }]
});
