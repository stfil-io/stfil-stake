import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FaqView from '../views/FaqView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/faq',
        name: 'FaqView',
        component: FaqView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
