<template>
    <div>
       <div class="menus">
        <button v-on:click="$emit('hide-button')">
            <h4><i class="fas fa-bars"></i></h4>
        </button>
            <!-- account -->
        <!-- <h5><i class="fas fa-user-circle"></i></h5> -->
        <!-- menu -->
        <!-- tambah buku  -->
            <!-- <h5><i class="fas fa-book-medical"></i></h5> -->
        <!-- semua buku  -->
            <!-- <h5><i class="fas fa-book"></i></h5> -->
       </div>
    </div>
</template>

<script>
export default {
    methods:{
        // emits:['mini'],
    }
}
</script>

<style scoped>
div{
    /* background-color: rgb(255, 199, 255); */
    padding: 1rem;
    color: whitesmoke;
}
.menus{
    background-color: purple;
    border-radius: 4px;
}
h5{
    margin: 30px 0;
}
h4{
    margin-bottom: 50px 0;
}
button{
    background-color: transparent;
    color: white;
    border: none;
    padding: 0;
}
a{
    color: whitesmoke;
    text-decoration: none;
}
</style>

