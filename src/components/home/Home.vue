<template>
    <div>
        <h1>Home</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters['token']
    },
    created(){
        if(this.token==null){
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
h1{
    text-align: center;
}
</style>