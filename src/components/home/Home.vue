<template>
    <div>
        <div v-if="loading" class="loading">
            <h1>Loading . . .</h1>
        </div>
        <div v-else>
            <h1>Home</h1>
            <button @click="logout">logout</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            loading: true
        }
    },
    computed:{
        ...mapGetters['token']
    },
    methods:{
        logout(){
            axios.post('auth/logout').then((res)=>{
                console.log(res.data)
                this.$store.dispatch('storeToken', null)
                localStorage.removeItem('token')
                this.$router.push('/login')
            }).catch(er=>console.log(er.response.data))
        }
    },
    async created(){
        this.loading = true
        if(this.token || localStorage.getItem('token')){
            axios.get('auth/user-profile')
                .then((res)=>{
                    console.log(res.data)
                    this.loading = false
                }).catch((e)=>{
                    console.log(e.response.data)
            this.loading = true
                })
            console.log('having a token')
        }else{
            this.loading = true
            this.$router.push('/login')
            localStorage.removeItem('token')
            console.log('deleting token from local storage')
            console.log('close, because not having a token')
        }
    }
}
</script>

<style scoped>
h1{
    text-align: center;
}
</style>