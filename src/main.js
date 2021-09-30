import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
app.use(router)



app.mount('#app')
