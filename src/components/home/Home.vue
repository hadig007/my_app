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
            loading: false
        }
    },
    computed:{
        ...mapGetters['token']
    },
    methods:{
        logout(){
            this.$router.push('/login')
            axios.post('auth/logout').then((res)=>{
                console.log(res.data)
                this.$store.dispatch('storeToken', null)
                localStorage.removeItem('token')
            }).catch(er=>console.log(er.response.data))
        }
    },
    async created(){
        this.loading = true
        console.log('token di created',this.$store.state.token)
        if(this.$store.state.token){
            setTimeout(()=>{
                axios.get('auth/user-profile')
                .then((res)=>{
                    console.log(res.data)
                    this.loading = false
                    this.$store.dispatch('storeUser', res.data)
                    console.log('user set')
                }).catch((e)=>{
                    console.log(e.response.data)
                })
            console.log('having a token')
            },1000)
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