import axios from "axios";


axios.defaults.baseURL = 'http://hadig.web.id/vueapp/public/api'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')