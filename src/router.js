const { createRouter, createWebHistory } = require("vue-router");

import Home from './components/home/DsHome.vue'
import Login from './components/autentikasi/Login.vue'
import Register from './components/autentikasi/Register.vue'
import TambahBuku from './components/buku/TambahBuku.vue'
import SemuaBuku from './components/buku/SemuaBuku.vue'
import Profile from './components/profile/Profile.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', redirect:'/home/semua_buku'},
        {path:'/home', component : Home,children:[
            {path:'tambah_buku', component:TambahBuku},
            {path:'semua_buku', component:SemuaBuku},
            {path:'profile', component:Profile},
        ]},
        {path:'/login', component : Login},
        {path:'/register', component : Register},
    ]
})
export default router;