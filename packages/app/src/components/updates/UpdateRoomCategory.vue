<script>

    import Swal from 'sweetalert2';

    export default{

        data() {
            return {
                roomCategory: '',
                isRegistered : false
            }
        },

        mounted(){
            //preenche input
            this.roomCategory = this.item
        },

        computed:{
            item(){
                return this.$route.params.id;
            }
        },

        methods: {
            HandleSubmit(e){
                e.preventDefault()
                console.log(this.item)
                
                this.isRegistered = window.updateRoomsCategory(this.roomCategory, this.item)

                if(this.isRegistered){
                    Swal.fire({
                        text: 'Categoria de Sala já cadastrada anteriormente!',
                        icon: 'error',
                        confirmButtonText: 'Ok',
                    })
                }else{

                    this.$router.push('/Categorias-de-Salas')

                    Swal.fire({
                        text: 'Categoria de Sala atualizada com sucesso!',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    })
                }
                
            }
        }

    }

</script>


<template>

    <div class="updateRoomCategory-container">

        <div class="updateRoomCategory-title">
            Atualização de Categoria de Sala:
        </div>

        <hr>
        <form class="updateRoomCategory-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Nome da Categoria</label>
                <input required v-model="roomCategory" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            
            <button type="submit" class="btn btn-primary">Atualizar</button>
        </form>
    </div>

</template>


<style>

    .updateRoomCategory-title{
        padding-top: 20px;
        font-size: 20px;
        margin: 0 auto;
        justify-content: center;
        text-align: center;
        display: flex;
        font-weight: bold;
       
    }

    .updateRoomCategory-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }

</style>