import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FaqView from '../views/FaqView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {title:'STFIL-STAKE',description:'Filecoin Liquid Staking'},
    },
    {
        path: '/faq',
        name: 'FaqView',
        meta: {title:'STFIL-STAKE | Faq',description:'Filecoin Liquid Staking'},
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
