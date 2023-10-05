<script>

    import Swal from 'sweetalert2';

    export default{

        data(){
            return{
                isRegistered : false
            }
        },


        methods: {
            HandleSubmit(e){
                e.preventDefault()
                this.isRegistered = window.registerRoomsCategories(this.roomCategory)

                if(this.isRegistered){
                    Swal.fire({
                        text: 'Categoria de Sala já cadastrada anteriormente!',
                        icon: 'error',
                        confirmButtonText: 'Ok',
                    })
                }else{

                    this.$router.push('/Categorias-de-Salas')

                    Swal.fire({
                        text: 'Categoria de Sala cadastrada com sucesso!',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    })
                }
                
            }
        }
    }

</script>


<template>

    <div class="registerRoomCategory-container">

        <div class="registerRoomCategory-title">
            Cadastro de Categoria de Sala:
        </div>

        <hr>

        <form class="registerRoomCategory-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Nome da Categoria</label>
                <input required v-model="roomCategory" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            
            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
    </div>

</template>


<style>

    .registerRoomCategory-title{
        padding-top: 20px;
        font-size: 20px;
        margin: 0 auto;
        justify-content: center;
        text-align: center;
        display: flex;
        font-weight: bold;
       
    }

    .registerRoomCategory-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }

</style>