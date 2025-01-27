import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        component: () => import('../../pages/MainPage.vue')
    },
    {
        path: '/service',
        component: () => import('../../pages/ServicePage.vue')
    },
    {
        path: '/account',
        component: () => import('../../pages/AccountPage.vue')
    },
    {
        path: '/pattern',
        component: () => import('../../pages/PatternPage.vue')
    },
    {
        path: '/report',
        component: () => import('../../pages/ReportPage.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;