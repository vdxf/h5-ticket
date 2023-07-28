import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: '/home',
        component: () => import('@/views/MainView'),
        children: [
            {
                path: "/home",
                name: 'HomeView',
                component: () => import('@/views/HomeView'),
                meta: {title: '首页'},
            },
            {
                path: "/userview",
                name: 'UserView',
                component: () => import('@/views/UserView'),
                meta: {title: '用户信息'},
            },
        ]
    },
    {
        path: "/login",
        name: 'LoginView',
        component: () => import('@/views/LoginView'),
        meta: {title: '登录'},
    },
    {
        path: "/register",
        name: 'Register',
        component: () => import('@/views/Register'),
        meta: {title: '注册账号'},
    },
    {
        path: "/imagecreate",
        name: 'ImageCreate',
        component: () => import('@/views/ImageCreate'),
        meta: {title: '创建相片'},
    },
    {
        path: "/imageupdata",
        name: 'ImageUpdata',
        component: () => import('@/views/ImageUpdata'),
        meta: {title: '更新相片'},
    },
    {
        path: "/imagedetail",
        name: 'ImageDetail',
        component: () => import('@/views/ImageDetail'),
        meta: {title: '相片详情'},
    },
    {
        path: '*',
        name: '404',
        component: () => import('@/views/NotFount'),
        meta: {title: 'error'},
    }

]

const router = new VueRouter({
    routes
})

// 登录权限判断
router.beforeEach((to, from, next) => {
    const token = window.localStorage.getItem('token')

    if (token) {
        // 已登录
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        // 未登录
        if (to.path !== '/login') {
            next('/login')
        } else {
            next()
        }
    }
})

router.afterEach((to, from) => {
    const {title} = to.meta || {}
    document.title = title || '立减金'
})

export default router