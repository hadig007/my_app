<template>
    <div>
        <div class="pilihan">
            <div class="menus">
            <h5>Admin</h5>
            <button v-on:click="$emit('hide-button')">
                <h4><i class="fas fa-bars"></i></h4>
            </button>
        </div>
        <div class="account"> 
            <router-link to="/home/profile">
                <h5><i class="fas fa-user-circle"></i> Account</h5>
            </router-link>
        </div>
        <div class="menu">
             <router-link to="/home/tambah_buku">
                <h5><i class="fas fa-book-medical"></i> Add Book</h5>
            </router-link>
            <router-link to="/home/semua_buku">
                <h5><i class="fas fa-book"></i> All Book</h5>
            </router-link>
        </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['user']),
    },
    created(){
        console.log('sidebar',this.user)
        
    }
}
</script>

<style scoped>
div{
    padding: 20px;
}
.menus{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0 20px;
    margin: 0;
}
.pilihan{
    background-color: rgb(197, 25, 197);
    padding: 0 0 20px 0 ;
    color: whitesmoke;
    border-radius: 4px;
}
button{
    color: whitesmoke;
    background-color: transparent;
    border: none;
}
.account{
    padding: 0 10px;
    margin: 0;
}
.menu{
    padding: 0 10px;
}
h5{
    margin: 30px 0;
}
a{
    color: whitesmoke;
    text-decoration: none;
}
</style>