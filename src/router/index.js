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
    },
    {
        path: "/password/change",
        name: 'PasswordChangeView',
        component: () => import('@/views/PasswordChangeView'),
        meta: { title: '修改密码' },
    },
    {
        path: "/ticketunclaimed",
        name: 'TicketUnclaimed',
        component: () => import('@/views/TicketUnclaimed'),
        meta: { title: '券明细' },
    },
    {
        path: "/ticketpartial",
        name: 'TicketPartial',
        component: () => import('@/views/TicketPartial'),
        meta: { title: '券明细' },
    },
    {
        path: "/ticketcompleted",
        name: 'TicketCompleted',
        component: () => import('@/views/TicketCompleted'),
        meta: { title: '券明细' },
    },
    {
        path: "/ticketcreate",
        name: 'TicketCreate',
        component: () => import('@/views/TicketCreate'),
        meta: { title: '创建券' },
    },
    {
        path: "/ticketgrant",
        name: 'TicketGrant',
        component: () => import('@/views/TicketGrant'),
        meta: { title: '发券' },
    },
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