const { createRouter, createWebHistory } = require("vue-router");

import Home from './components/home/DsHome.vue'
import Login from './components/autentikasi/Login.vue'
import Register from './components/autentikasi/Register.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', component : Home},
        {path:'/login', component : Login},
        {path:'/register', component : Register},
    ]
})
export default router;