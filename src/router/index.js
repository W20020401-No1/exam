import Vue from 'vue'
import VueRouter from 'vue-router'
import Single from '../views/Single.vue'
import Multilsingle from '../views/Multilsingle.vue'
import Comprehensive from '../views/Comprehensive.vue'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import CuoTiJi from '../views/CuoTiJi.vue'
import cuoti from '../views/cuoti.vue'
import DaTiXiangQing from '../views/DaTiXiangQing.vue'



Vue.use(VueRouter)

const routes = [{
        path: '/search',
        component: Search
    },
    {
        path: '/DaTiXiangQing',
        component: DaTiXiangQing
    },
    {
        path: '/xiangqing',
        component: CuoTiJi
    },
    {
        path: '/cuoti',
        component: cuoti
    },
    {
        path: '/single',
        name: 'Single',
        component: Single
    },
    {
        path: '/multilsingle',
        name: 'Multilsingle',
        component: Multilsingle
    },
    {
        path: '/com',
        name: 'Comprehensive',
        component: Comprehensive
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router