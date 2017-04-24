import Vue from 'vue';
import Router from 'vue-router';
import layout from 'components/layout';
import valuationProductsDetail from 'views/valuation/valuation_products_detail';
Vue.use(Router);

export default new Router({
    routes: [{
        path: '/swap',
        name: 'layout',
        component: layout,
        children: [{
            path: '/',
            name: 'valuationProductsDetail',
            component: valuationProductsDetail
        }]
    }]
});
