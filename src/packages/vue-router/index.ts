import Vue from 'vue';
import VueRouter, { RouterOptions } from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

const options: RouterOptions = {
    mode: 'history',
    routes,
};

const router = new VueRouter(options);

router.beforeEach((to, form, next) => {

    const token = window.localStorage.getItem('token');

    /** 没有用户token 且不在登录页面 */
    if (!token && to.name !== 'login') {
        // window.location.href = "/login "
        router.push({
            name: 'login'
        })
    }
    /** 有用户token 且在登录页面 */
    else if (token && to.name !== 'index') {
        router.push({
            name: 'index'
        })
    }
    else {
        // 记录浏览历史
        // addHistory(to);
        next();
    }
});

/** RouterInfo数据模型 */
// class RouterInfo {
//     label: string;
//     name: string;
//     fullPath: string;

//     constructor(label: string, name: string, fullPath: string) {
//         this.label = label;
//         this.name = name;
//         this.fullPath = fullPath;
//     }
// }

/** 添加当前路由信息 用来为面包屑提供数据集 */
// function addHistory(current: any) {

//     const originData:RouterInfo[] = [];

//     let filterRouter = []; 

//     // 添加已有路由
//     originData.map((item:RouterInfo)=>{
//         filterRouter.push(item.name);
//     })

//     filterRouter = filterRouter.concat(['main', 'login']) // 排除这些特殊路由

//     current.matched.map((item: any) => {
//         if (filterRouter.indexOf(item.name) == -1) {
//             const routerInfo = new RouterInfo(item.meta.title, item.name, item.fullPath);
//             originData.push(routerInfo);
//         }
//     })

//     window.localStorage.setItem('breadcrumb', JSON.stringify(originData));
// }

export default router;
