<template>
    <div class="card">
        <div class="header">
            <img :src="img" />
        </div>
        <div class="body">
            <h6>{{ judul }}</h6>
        </div>
        <div class="button">
            <button v-on:click="$emit('detail')">Detail 👍</button>
            <button v-on:click="$emit('edit')">Edit 🖊️</button>
            <button v-on:click="$emit('hapus')">Hapus ❌</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // image : img,
            img1: '1633238863.png'
        }
    },
    props:[
        'id_buku','judul','penulis','keterangan', 'inputer', 'imsc','id'
    ],
    computed:{
        img(){
            return require(`../../../../../28september2021/authentication-setup/public/${this.imsc}`) 
        }
    }
}
</script>

<style scoped>
.card{
    /* width: 15rem; */
    border-radius: 4px;
    margin: 10px;
    display: inline-block;
    /* min-width: 15rem; */
    height: 300px;
    padding: 5px;
}
h2{
    background-color: violet;
    padding: 5px;
    border-radius: 4px 4px 0 0;
    text-align: center;
    color: rgb(83, 60, 104);
}
.body{
    padding: 5px 10px;
    width: 200px;
}
span{
    color: grey;
}
img{
    width: 200px;
    height: 200px;
}
.button{
    display: flex;
    justify-content: space-around;
    
}
button{
    border-radius: 4px;
    border: transparent solid 1px;
    background-color: rgb(224, 224, 224);
    padding: 2px 7px;
    font-size: 12px;
}
</style>