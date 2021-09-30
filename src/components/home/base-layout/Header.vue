<template>
    <header>
        <nav>
            <h2>Data Buku</h2>
            <div class="aksi">
                <button @click="logout">logout</button>
            </div>
        </nav>
    </header>
</template>

<script>
import axios from 'axios'
export default {
    methods:{
        logout(){
            axios.post('auth/logout').then((res)=>{
                console.log(res.data)
                localStorage.removeItem('token')
                this.$store.dispatch('storeToken', null)
                this.$store.dispatch('storeUser', null)
                this.$router.push('/login')
            }).catch(er=>console.log(er.response.data))
        }
    },
}
</script>

<style scoped>
header{
    background-color: purple;
    color: whitesmoke;
}
nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
}
.aksi button{
    background-color: violet;
    border: none;
    border-radius: 4px;
}
</style>