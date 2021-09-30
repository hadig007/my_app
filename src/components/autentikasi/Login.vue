<template>
    <div>
        <div v-if="loading" class="loading">
            <h1>Loading . . .</h1>
        </div>
        <h1>Login page</h1>
        <div class="input">
            <label for="">Email</label>
            <input type="text" v-model="email">
            <label for="">Password</label>
            <input type="password" v-model="password">
            <button @click="login">Login</button>
        </div>
    </div>
        <div v-if="isgagal" class="gagal">
            <h3>Email atau password Salah</h3>
            <button @click="isgagal =! isgagal" style="width:40px;color:grey;margin:5px;border:red solid 1px">ok</button>
        </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            email:'',
            password:'',
            loading: false,
            isgagal : false,
        }
    },
    methods:{
        async login(){
            this.loading = true
            await axios.post('auth/login',{
                email : this.email,
                password :this.password
            }).then((res)=>{
                console.log(res.data.access_token)
                localStorage.setItem('token',res.data.access_token )
                this.$store.dispatch('storeToken',res.data.access_token )
                this.$router.push('/home')
                this.loading = false
            }).catch((e)=>{
                console.log(e.response.data)
                this.loading = false
                this.isgagal = true
            })
        }
    }
}
</script>

<style scoped>
.loading{
    position: absolute;
    background-color:hotpink;
    z-index: 2;
}
.gagal{
    margin: 0;
    position: relative;

}
div{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: rgb(217, 159, 255);
    margin: 30%;
    border-radius: 4px;
    color: whitesmoke;
    text-align: center;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    position:absolute;
    z-index: 1;
}
h1{
    margin: 0;
}
.input{
    box-shadow:none;
    margin: 0;
    background: violet;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    position: relative;
}
input{
    border-radius: 4px;
    border:none;
    padding: 0 5px;
}
button{
    border-radius: 4px;
    border: none;
    margin-top: 8px;
    width: 100%;
}
</style>

