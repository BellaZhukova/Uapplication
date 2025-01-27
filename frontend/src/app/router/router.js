import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    // {
    //     path: '/',
    //     component: () => import('../../components/MainPage.vue')
    // },
    {
        path: '/',
        component: () => import('../../pages/MainPage.vue')
    },
    // {
    //     path: '/service',
    //     component: () => import('../../components/ServicePage.vue')
    // },
    {
        path: '/service',
        component: () => import('../../pages/ServicePage.vue')
    },
    // {
    //     path: '/account',
    //     component: () => import('../../components/AccountPage.vue')
    // },
    {
        path: '/account',
        component: () => import('../../pages/AccountPage.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;