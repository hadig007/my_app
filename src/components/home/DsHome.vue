<template>
    <div>
        <div v-if="loading" class="loading">
            <h1>Loading . . .</h1>
        </div>
        <div v-if="!loading ">
            <header-nav></header-nav>   
            <div class="container-fluid">
                <div class="row">

                    <!-- mini sidebar  -->
                    <div v-if="mini" v-on:click="minied" class="col-sm-1">
                        <mini-sidebar></mini-sidebar>
                    </div>
                    <div  v-if="mini" class="col-sm-11">
                        <!-- main content -->
                       <div class="content">
                           <router-view></router-view>
                       </div>
                    </div>
                    
                    <!-- normal sidebar  -->
                    <div v-if="!mini" v-on:click="minied"  class="col-md-2">
                        <!-- sidebar -->
                        <sidebar></sidebar>
                    </div>
                    <div v-if="!mini"  class="col-md-10">
                        <!-- main content -->
                       <div class="content">
                           <router-view></router-view>
                       </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import HeaderNav from './base-layout/Header.vue'
import Sidebar from './base-layout/Sidebar.vue'
import MiniSidebar from './base-layout/MiniSidebar.vue'
export default {
  components: { HeaderNav, Sidebar ,MiniSidebar },
    data(){
       return{
            loading: false,
            mini: true
        }
    },
    computed:{
    },
    methods:{
        minied(){
            this.mini = !this.mini
            console.log(this.mini)
        }
    },
    async created(){
                this.loading = true
        await axios.get('auth/user-profile',{
            headers:{
                Authorization : 'Bearer ' + localStorage.getItem('token')
            }
        }).then((res)=>{
            console.log(res.data)
                this.$store.dispatch('storeUser', res.data)
                this.$store.dispatch('storeToken', localStorage.getItem('token'))
            }).catch((er=>{
                console.log(er.response.data)
                this.loading = true
                this.$router.push('/login')
                localStorage.removeItem('token')
                console.log('deleting token from local storage')
                console.log('close, token has expired')
            }))
        this.loading = true
            let has = localStorage.getItem('token')
            if(has){
                this.loading = false
                return true
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
    margin: 50px;
}
.row>*{
    padding: 0;
}
.content{
    background-color:rgb(212, 212, 212);
    width: 100%;
    height: 1000px;
}
</style>