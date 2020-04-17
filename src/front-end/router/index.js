import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Landing from '../views/Landing.vue'
import DayLove from '../views/DayLove.vue'
import WriteMessage from '../views/WriteMessage.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/landing',
        name: 'Landing',
        component: Landing,
        props: true
    },
    {
        path: '/daylove',
        name: 'DayLove',
        component: DayLove,
        props: true
    },
    {
        path: '/writemessage',
        name: 'WriteMessage',
        component: WriteMessage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
