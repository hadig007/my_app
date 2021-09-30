const { createRouter, createWebHistory } = require("vue-router");

import Home from './components/home/Home.vue'
import Login from './components/autentikasi/Login.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', component : Home},
        {path:'/login', component : Login},
    ]
})
export default router;