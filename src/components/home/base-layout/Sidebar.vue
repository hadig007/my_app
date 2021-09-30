<template>
    <div>
        <div class="user">
            <h3 v-if="user">Hi,{{ user.name }}</h3>
        </div>
        <p>menu</p>
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
    background-color: thistle;
    width: 100%;
    height: 1000px;
    padding: 10px;
}
.user{
    color: grey;
    margin: 0;
    width: 100%;
    text-align: center;
}
</style>