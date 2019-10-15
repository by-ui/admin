import { RouteConfig } from 'vue-router';

const views: RouteConfig[] = [
    {
        path: 'index',
        name: 'index',
        meta: {
            title: '首页'
        },
        component: () => import(/* webpackChunkName: "modules/index" */ '@/pages/index/index.vue'),
    },
];

export default views;
