<template>
    <div class="card">
        <div class="header">
            <img :src="img" />
        </div>
        <div class="body">
            <h6><span>ID Buku</span> {{ id_buku}}</h6>
            <h6><span>Judul Buku</span> {{ judul }}</h6>
            <h6><span>Penulis Buku</span> {{ penulis }}</h6>
            <h6><span>Keterangan</span> {{ keterangan }}</h6>
            <h6><span>Inputer</span> {{ inputer }}</h6>
            <p>img source : {{ imsc }}</p>
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
        'id_buku','judul','penulis','keterangan', 'inputer', 'imsc'
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
    width: 15rem;
    border-radius: 4px;
    margin: 10px;
    display: inline-block;
    min-width: 15rem;
    height: 15rem;
}
h2{
    background-color: violet;
    padding: 5px;
    border-radius: 4px 4px 0 0;
    text-align: center;
    color: rgb(83, 60, 104);
}
.body{
    padding: 5px;
}
span{
    color: grey;
}
img{
    width: 240px;
    height: 240px;
}
</style>