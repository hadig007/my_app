<template>
    <div>
        <div v-if="loading" class="loading">
            <h1>Loading . . .</h1>
        </div>
        <div v-if="!loading ">
            <header-nav></header-nav>   
            <div class="container-fluid">
                <div class="row">

                    <div v-if="!mini" class="col-md-2">
                        <!-- sidebar -->
                        <sidebar></sidebar>
                    </div>
                    <div v-if="mini" @hide="mini=!mini" class="col-md-1">
                        <mini-sidebar></mini-sidebar>
                    </div>


                    <div v-if="!mini"  class="col-md-10">
                        <!-- main content -->
                       <div class="content"></div>
                    </div>
                    <div  v-if="mini" class="col-md-11">
                        <!-- main content -->
                       <div class="content"></div>
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
    async created(){
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
                console.log('close, because not having a token')
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
}
.row>*{
    padding: 0;
}
.content{
    background-color:grey;
    width: 100%;
    height: 1000px;
}
</style>