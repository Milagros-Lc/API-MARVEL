import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/heroes',
    name: 'Heroes',
    component: () =>
        import ('../views/Heros.vue')
}, ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router