<template>
    <div>
        <h2>Semua Buku</h2>
        <hr>
        <div class="buku">
            <buku
            v-for="b in buku"
            :key="b.id"
            :id_buku="b.id_buku"
            :judul="b.judul"
            :imsc="b.image"
            :penulis="b.penulis"
            :keterangan="b.keterangan"
            :inputer="b.inputer"
            ></buku>
        </div>
    </div>
</template>

<style scoped>
h2{
    text-align: center;
}
</style>

<script>
import axios from 'axios'
import Buku from './Buku.vue'
import { mapGetters } from 'vuex'
export default {
    components:{Buku},
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters(['buku'])
    },
    methods:{

    },
    async created(){
        setTimeout(()=>{
            axios.get('buku').then((res)=>{
            console.log(res.data)
            this.$store.dispatch('storeBuku', res.data)
            console.log(this.buku)
        }).catch(res=>console.log(res.data))
        },100)
    }
}
</script>

<style scoped>
.buku{
    display: inline-block;
}
</style>