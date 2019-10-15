import Vue from 'vue'
import router from './packages/vue-router';
import App from './app.vue';

import './components';

/******** 公共包 ********/
// import './packages/maple-request'

/******** 公共UI及样式 ********/
import './packages/by-ui'
import 'by-ui-style/src/index.scss'
import './packages/maple-theme';
import './styles/main.scss';

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});