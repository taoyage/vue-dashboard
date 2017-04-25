// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';

import App from './App';
import router from './router';
import store from 'libraries/store/index';
import plugins from 'libraries/plugins/index';

/* import styles */
import 'element-ui/lib/theme-default/index.css';
import 'assets/styles/main.scss';

Vue.use(ElementUI);
Vue.use(plugins);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
