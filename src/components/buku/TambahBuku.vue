<template>
    <div>
        <form @submit.prevent="addBook">
        <h2>Form Tambah Buku</h2>
            <div class="form">
                <label for="id_buku">ID Buku</label>
                <input type="text" v-model="id_buku">
            </div>
            <div class="form">
                <label for="judul">Judul Buku</label>
                <input type="text" v-model="judul">
            </div>
            <div class="form">
                <label for="penulis">Penulis Buku</label>
                <input type="text" v-model="penulis">
            </div>
            <div class="form">
                <label for="keterangan">Keterangan</label>
                <input type="text" v-model="keterangan">
            </div>
            <div class="input-group mb-3 mt-3">
                <div class="custom-file">
                    <label class="custom-file-label" for="inputGroupFile01">Gambar Buku</label>
                    <input type="file" @change="images" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                </div>
            </div>
            <button>Simpan</button>
        </form>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data(){
        return{
            id_buku:'',
            judul:'',
            penulis:'',
            keterangan:'',
            image: null
        }
    }, 
    methods:{
        images(e){
            let file = e.target.files[0]
            let reader = new FileReader();
            reader.onload = event=>{
                this.image = event.target.result
                console.log(event.target.result);
            };
            reader.readAsDataURL(file);
        },
        addBook(){
            axios.post('create_buku',{
                id_buku:this.id_buku,
                judul:this.judul,
                penulis:this.penulis,
                keterangan:this.keterangan,
                image:this.image
            }).then((res)=>{
                console.log(res.data)
                this.$router.push('/home/semua_buku')
            })
            .catch(er=>console.log('gagal',er.response.data))
        }
    }
}
</script>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    align-items: center;
}
form{
    position: absolute;
    top: 20%;
    border-radius: 4px;
    background-color: violet;
    padding: 1rem;
    text-align: start;
    color: honeydew;
}
h2{
    border-bottom: solid rgb(95, 95, 95) 2px;
    color: rgb(94, 94, 94);
}
input{
    border-radius: 4px;
    border:none;
    padding: 0 5px;
    width: 100%;
}
button{
    border-radius: 4px;
    border: none;
    margin-top: 8px;
    width: 100%;
}
</style>