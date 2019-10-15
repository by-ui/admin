import { RouteConfig } from 'vue-router';
import views from '@/_config/views';

const routes: RouteConfig[] = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录'
        },
        component: () => import(/* webpackChunkName: "modules/login" */ '@/pages/login/login.vue'),
    },
    {
        path: '',
        name: 'main',
        component: () => import(/* webpackChunkName: "modules/main" */ '@/pages/_main/main.vue'),
        children: views,
    }
    // {
    //     path: '*',
    //     redirect: {
    //         name: '404',
    //     },
    // },
    // {
    //     path: '/router-nonexistent',
    //     name: '404',
    //     component: () => import(/* webpackChunkName: "modules/main" */ '@/views/_errors/404.vue'),
    // },
    // {
    //     path: '/authorization-failure',
    //     name: '403',
    //     component: () => import(/* webpackChunkName: "modules/main" */ '@/views/_errors/403.vue'),
    // },
];

export default routes;
