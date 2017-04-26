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
        }, {
            path: '/entry',
            name: 'entry',
            component: resolve => require.ensure([], () => resolve(require('views/contract/entry')), 'entry')
        }, {
            path: '/position',
            name: 'position',
            component: resolve => require.ensure([], () => resolve(require('views/position/position')), 'position')
        }, {
            path: '/margin',
            name: 'margin',
            component: resolve => require.ensure([], () => resolve(require('views/margin/margin')), 'margin')
        }, {
            path: '/settlement',
            name: 'settlement',
            component: resolve => require.ensure([], () => resolve(require('views/settlement/settlement')), 'settlement')
        }, {
            path: '/about',
            name: 'about',
            component: resolve => require.ensure([], () => resolve(require('views/about/about')), 'about')
        }]
    }]
});
