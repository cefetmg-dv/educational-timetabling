<script>

    export default{

        computed:{
            item(){
                return this.$route.params.id;
            }
        },

        methods: {
            HandleSubmit(e){
                e.preventDefault()
                console.log(this.item)
                window.updateRoomsCategory(this.roomCategory, this.item)
            }
        }

    }

</script>


<template>

    <div class="registerRoomCategory-container">
        <form class="registerRoomCategory-form" @submit="HandleSubmit">
            <div class="mb-3">
                <label class="form-label">Nome da Categoria</label>
                <input required v-model="roomCategory" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            
            <button type="submit" class="btn btn-primary">Atualizar</button>
        </form>
    </div>

</template>


<style>

    .registerRoomCategory-form{
        margin: 0 auto;
        text-align: center;
        width: 80%;
        margin-top: 5%;
    }

</style>