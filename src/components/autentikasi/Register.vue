<template>
    <div>
        <div v-if="loading" class="loading">
            <h1>Loading . . .</h1>
        </div>
        <h1>Register page 😄</h1>
        <div class="input">
            <label for="">Name</label>
            <input type="text" v-model="name">
            <label for="">Email</label>
            <input type="text" v-model="email">
            <label for="">Password</label>
            <input type="password" v-model="password">
            <label for="">Password Confirmation</label>
            <input type="password" v-model="password_confirmation">
            <button @click="register">Register</button>
            <span>have an account? <router-link to="/login">login</router-link></span>
        </div>
    </div>
        <div v-if="selesai" class="gagal">
            <h3>Akun Berhasil di daftar😍</h3>
            <button @click="selesai =! selesai" style="width:40px;color:grey;margin:5px;border:red solid 1px">ok</button>
        </div>
        <div v-if="gagal" class="gagal">
            <h3>Akun yang anda masukkan tidak valid😢</h3>
            <button @click="gagal =! gagal" style="width:40px;color:grey;margin:5px;border:red solid 1px">ok</button>
        </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            name:'',
            email:'',
            password:'',
            password_confirmation:'',
            loading:false,
            selesai:false,
            gagal:false,
        }
    },
    methods:{
        register(){
            this.loading = true
            axios.post('auth/register',{
                name : this.name,
                email: this.email,
                password: this.password,
                password_confirmation:this.password
            }).then((res)=>{
                console.log(res.data)
                this.loading = false
                this.selesai = true
                setTimeout(()=>{
                    this.$router.push('/login')
                    this.selesai = false
                },2000)
            }).catch((er)=>{
                console.log(er.response)
                this.loading = false
                this.gagal = true
                setTimeout(()=>{
                    this.gagal = false
                },2000)
            })
        }
    }
}
</script>

<style scoped>
span{
    font-size: 0.9rem;
}
a{
    text-decoration: none;
}
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
    background-color: rgb(191, 95, 255);
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
    background: rgba(255, 255, 255, 0.185);
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

