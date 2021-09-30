import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './axios'


const app = createApp(App)
app.use(router)
app.use(store)



app.mount('#app')
