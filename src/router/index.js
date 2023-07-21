import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: 'HomeView',
        component: () => import('@/views/HomeView'),
        meta: { title: '首页' },
    },
    {
        path: "/login",
        name: 'LoginView',
        component: () => import('@/views/LoginView'),
        meta: { title: '登录' },
    },
    {
        path: "/register",
        name: 'Register',
        component: () => import('@/views/Register'),
        meta: { title: '注册账号' },
    }
]

const router = new VueRouter({
    routes
})

// 登录权限判断

router.afterEach((to, from) => {
    const { title } = to.meta || {}
    document.title = title || '立减金'
})

export default router