import Vue, { PluginObject } from 'vue';

import {
    Button,
} from 'vue-by-ui';

const Byui: PluginObject<never> = {
    install(Vue) {
        Vue.component('by-button', Button);
        // Vue.prototype.$loading = Loading.service;
    },
};

Vue.use(Byui);

// import './element-ui-style-fix.scss';
